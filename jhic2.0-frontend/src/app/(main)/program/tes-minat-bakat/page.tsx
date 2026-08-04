"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { PageHeader } from '@/shared/ui/PageHeader';
import { ChevronRight, RefreshCcw, ArrowRight, Info } from 'lucide-react';

import { quizQuestions, jurusanInfo } from '@/services/dummyData';

export default function TesMinatBakatPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ RPL: 0, TKJ: 0, PG: 0 });
  const [showResult, setShowResult] = useState(false);

  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Program", href: "/program/profil-konsentrasi-keahlian" },
    { label: "Tes Minat & Bakat" },
  ];

  const handleAnswer = (type: "RPL" | "TKJ" | "PG") => {
    setScores(prev => ({ ...prev, [type]: prev[type] + 1 }));
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ RPL: 0, TKJ: 0, PG: 0 });
    setShowResult(false);
  };

  // Get Top Recommendation
  const totalScore = scores.RPL + scores.TKJ + scores.PG;
  const highestScoreType = (Object.keys(scores) as Array<"RPL"|"TKJ"|"PG">).reduce((a, b) => scores[a] > scores[b] ? a : b);
  const recommendedJurusan = jurusanInfo[highestScoreType];

  return (
    <main className="min-h-screen bg-surface">
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Tes Minat & Bakat Jurusan"
        description="Temukan jurusan di SMK Telkom Malang yang paling sesuai dengan passion dan karaktermu melalui 15 pertanyaan singkat ini."
      />

      <section className="py-12 md:py-20">
        <div className="container max-w-[800px] mx-auto px-4">
          
          {!showResult ? (
            <div className="bg-white rounded-3xl shadow-sm border border-border-light p-6 md:p-10 animate-in fade-in slide-in-from-bottom-4">
              {/* Progress Bar */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-bold text-text-muted uppercase tracking-wider">Pertanyaan {currentQuestion + 1} dari {quizQuestions.length}</span>
                  <span className="text-sm font-bold text-accent">{Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-accent h-2.5 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-text-main mb-8 leading-tight">
                {quizQuestions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-4">
                {quizQuestions[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.type as "RPL"|"TKJ"|"PG")}
                    className="w-full text-left p-5 rounded-2xl border-2 border-border-light hover:border-accent hover:bg-accent/5 transition-all focus:outline-none focus:ring-4 focus:ring-accent/20 flex items-center justify-between group"
                  >
                    <span className="text-lg text-gray-700 font-medium">{option.text}</span>
                    <div className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-sm border border-border-light overflow-hidden animate-in fade-in zoom-in-95 duration-500">
              <div className={`${recommendedJurusan.color} p-10 md:p-16 text-center text-white relative`}>
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 bg-white/20 rounded-3xl backdrop-blur-md flex items-center justify-center mb-6">
                    <recommendedJurusan.icon className="w-12 h-12 text-white drop-shadow-md" />
                  </div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold tracking-wider mb-4">
                    REKOMENDASI UTAMA KAMU
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
                    {recommendedJurusan.title}
                  </h2>
                  <p className="text-lg md:text-xl font-medium max-w-2xl text-white/90 leading-relaxed">
                    {recommendedJurusan.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <h4 className="text-xl font-extrabold text-text-main mb-6">Analisis Kecocokan Minat:</h4>
                
                <div className="space-y-6 mb-10">
                  {/* RPL Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-700">RPL (Software Engineering)</span>
                      <span className="font-bold text-blue-500">{Math.round((scores.RPL / totalScore) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full transition-all duration-1000" style={{ width: `${(scores.RPL / totalScore) * 100}%` }}></div>
                    </div>
                  </div>
                  
                  {/* TKJ Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-700">TKJ (Computer & Network)</span>
                      <span className="font-bold text-red-500">{Math.round((scores.TKJ / totalScore) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full transition-all duration-1000" style={{ width: `${(scores.TKJ / totalScore) * 100}%` }}></div>
                    </div>
                  </div>

                  {/* PG Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-700">PG (Game Development)</span>
                      <span className="font-bold text-purple-500">{Math.round((scores.PG / totalScore) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className="bg-purple-500 h-3 rounded-full transition-all duration-1000" style={{ width: `${(scores.PG / totalScore) * 100}%` }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Link 
                    href={`/program/profil-konsentrasi-keahlian`} 
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-accent text-white py-3.5 px-6 rounded-xl font-bold hover:bg-accent-hover transition-colors shadow-[0_8px_20px_rgba(215,25,32,0.26)] hover:shadow-accent"
                  >
                    Lihat Profil Konsentrasi
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button 
                    onClick={resetQuiz}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-100 text-text-main py-3.5 px-6 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                  >
                    <RefreshCcw className="w-5 h-5" />
                    Ulangi Quiz
                  </button>
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 items-start">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-blue-900 leading-relaxed">
                    Hasil ini hanyalah rekomendasi awal berdasarkan preferensimu. Keputusan akhir tetap berada di tanganmu. Kamu bebas memilih jurusan apa pun yang paling membuatmu bersemangat!
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

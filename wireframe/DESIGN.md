# Product Requirements Document (PRD)

## Project

**SMK Corporate Education Website UI Redesign**

### Objective

Recreate the visual language of the provided design while improving
scalability, consistency, accessibility, and maintainability.

## Design Style

### Primary Style

-   Corporate Soft Minimalism
-   Card-Based Marketing Layout
-   Soft UI influences
-   Flat Design
-   Editorial Typography

### Design Keywords

-   Professional
-   Trustworthy
-   Modern
-   Friendly
-   Spacious
-   Educational
-   Digital-first

## Target Audience

-   Prospective students
-   Parents
-   Teachers
-   Industry partners

## Goals

-   Build trust within 5 seconds.
-   Highlight the school's strengths.
-   Make admissions CTAs highly visible.
-   Ensure excellent responsiveness.
-   Maintain WCAG AA accessibility.

## Visual Principles

1.  8-point spacing system
2.  Large whitespace
3.  Rounded geometry
4.  Single brand accent color
5.  Soft elevation
6.  Consistent card layout
7.  Clear typography hierarchy
8.  Mobile-first responsiveness

## Design Tokens

### Colors

  Token            Value
  ---------------- ---------
  Primary          #D71920
  Primary Hover    #B7141A
  Background       #F8F9FB
  Surface          #FFFFFF
  Text Primary     #111827
  Text Secondary   #6B7280
  Border           #E5E7EB

### Radius

  Component   Radius
  ----------- --------
  Card        20px
  Button      999px
  Input       14px
  Image       24px

### Typography

  Role        Size Weight
  --------- ------ ----------
  Display     56px Bold
  H1          40px Bold
  H2          32px Bold
  H3          24px SemiBold
  Body        16px Regular
  Caption     14px Regular

### Shadows

-   Small: `0 4px 12px rgba(0,0,0,.05)`
-   Medium: `0 8px 30px rgba(0,0,0,.08)`
-   Large: `0 20px 60px rgba(0,0,0,.10)`

## Grid

-   Desktop: 1440px canvas, 1200px container, 12 columns
-   Tablet: 8 columns
-   Mobile: 4 columns
-   Gutter: 24px
-   Section spacing: 96--120px

## Components

### Navbar

-   Floating white container
-   Rounded corners
-   Sticky behavior
-   Centered navigation
-   Language switch
-   Primary CTA

### Hero

-   Welcome badge
-   Large headline
-   Supporting text
-   Primary CTA
-   Student imagery
-   Statistics section

### Feature Cards

-   Equal height
-   Icon + title + description
-   Hover elevation
-   Optional featured card with brand color

### CTA Button

-   Height: 56px
-   Pill shape
-   Bold text
-   Arrow icon animation on hover

### Footer

-   Contact
-   Programs
-   Social links
-   Copyright

## Motion

-   Fade-up on section load
-   Hover lift (2--4px)
-   Arrow slide animation
-   Navbar shrink on scroll

## Accessibility

-   WCAG AA contrast
-   Keyboard navigation
-   Focus states
-   44×44 touch targets
-   Semantic HTML

## Data Model & Component State (CRUD Readiness)

Untuk mendukung integrasi dengan sistem CMS/Admin (CRUD), komponen UI didesain menggunakan atribut `data-*` dan state eksplisit:

### Data Attributes Framework
- **Modal Data (`data-*`)**: Elemen trigger modal (seperti tombol "Detail") harus menyimpan semua data yang diperlukan untuk merender modal menggunakan atribut `data-` (contoh: `data-title`, `data-desc`, `data-img`). Script modal akan mengambil data ini dan memiliki nilai *fallback* bawaan jika data kosong.
- **Count-up Animation (`data-counter`)**: Elemen dengan atribut `data-counter` akan otomatis dianimasikan angkanya dari 0 ke nilai target saat muncul di viewport menggunakan `IntersectionObserver`. `data-suffix` dapat ditambahkan untuk teks akhiran (misal: '+').

### Component States
- **Loading State (Skeleton)**: Daftar atau grid menggunakan class `skeleton-text` dan `skeleton-img` untuk menampilkan efek shimmer loading (sebelum data dari database dimuat). Kontainer data aslinya disembunyikan dalam `.data-state` hingga data siap.
- **Empty State**: Ketika data tidak tersedia (contoh: hasil pencarian/filter kosong), antarmuka menampilkan `.empty-state` yang berisi ikon indikatif, judul, dan saran tindakan.
- **Line Clamp**: Deskripsi atau teks panjang dipotong konsisten menggunakan utility class `.line-clamp-2` atau `.line-clamp-3` untuk memastikan tinggi kartu tetap sama.

## Acceptance Criteria

-   Consistent spacing using 8pt grid
-   Single accent color
-   Responsive across mobile/tablet/desktop
-   Lighthouse Performance \>90
-   Lighthouse Accessibility \>95
-   Pixel-consistent reusable components
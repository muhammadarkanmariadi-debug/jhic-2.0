import React from "react";
import { Tabs } from "@/shared/ui/Tabs";
import { ContentSections } from "@/shared/ui/ContentSections";
import { CurriculumTab } from "@/shared/types";

interface TabbedCurriculumContentProps {
  tabs: CurriculumTab[];
  layout?: "pills" | "grid";
  iconMap?: Record<string, React.ReactNode>;
}

/**
 * Renders a tabbed curriculum page (Program Umum / Persiapan Kelulusan)
 * from data, mirroring the reference kurikulum microsite.
 */
export function TabbedCurriculumContent({
  tabs,
  layout = "grid",
  iconMap = {},
}: TabbedCurriculumContentProps) {
  const items = tabs.map((tab) => ({
    key: tab.key,
    label: tab.label,
    icon: tab.icon ? iconMap[tab.icon] : undefined,
    content: (
      <div className="max-w-[1100px] mx-auto">
        {tab.intro ? (
          <p className="text-text-muted text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            {tab.intro}
          </p>
        ) : null}
        <ContentSections sections={tab.sections} />
      </div>
    ),
  }));

  return <Tabs tabs={items} layout={layout} />;
}

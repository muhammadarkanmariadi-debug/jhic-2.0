# Scrum & Sprint Plan — JHIC 2.0

This document outlines the detailed Scrum methodology and Sprint plan for the development of JHIC 2.0 (Moklet SIGAP).

## Team Roles

The development team consists of 5 developers:
- **Dev 1**: Backend Infrastructure & Core Integrations
- **Dev 2**: Security (Auth), RBAC, & Backend Feature Logic
- **Dev 3**: Frontend Architecture & UI Restructuring (SPMB, Kurikulum)
- **Dev 4**: Data Integration, External APIs & Feedback UI
- **Dev 5**: UI Components, Interactive Elements & QA

## Sprint 1: Core Foundation & High Priority Refactors

**Goal:** Establish the backend structure, authentication, and handle the most critical frontend refactors (SPMB landing page & Curriculum module).

| Task ID | Description | Assignee | Story Points | Priority | Status |
|---|---|---|---|---|---|
| JHI-01 | Initialize Backend (Node.js/Express) & Prisma Schema | Dev 1 | 5 | High | To Do |
| JHI-02 | Setup JWT Auth & RBAC (Super Admin, Konten, SPMB, dll) | Dev 2 | 3 | High | To Do |
| JHI-03 | Revamp PPDB to SPMB Landing Page (Remove forms, add yayasan redirect) | Dev 3 | 3 | High | In Progress |
| JHI-04 | Develop MokletKurikulum Page (Structure, routing, UI) | Dev 4 | 5 | Medium | To Do |
| JHI-05 | Setup MokletKarir UI Components (Profile placeholders) | Dev 5 | 3 | Medium | To Do |

## Sprint 2: Feature Expansion (Karir & Hubin)

**Goal:** Integrate career portals, build timelines, and expand the Hubungan Industri (Hubin) module with full backend support.

| Task ID | Description | Assignee | Story Points | Priority | Status |
|---|---|---|---|---|---|
| JHI-06 | Integrate Career Portal to MokletKarir (API/Links) | Dev 1 | 5 | High | To Do |
| JHI-07 | Build Timeline Belajar Component (Interactive UI) | Dev 5 | 2 | Medium | To Do |
| JHI-08 | Expand MokletHubin Frontend (Lomba, Loker, Beasiswa views) | Dev 4 | 8 | High | To Do |
| JHI-09 | Implement Backend CRUD APIs for Hubin data | Dev 2 | 5 | High | To Do |
| JHI-10 | Implement Backend CRUD APIs for Kurikulum versions | Dev 3 | 5 | Medium | To Do |

## Sprint 3: Interactive Services & Stabilization

**Goal:** Introduce the chatbot, feedback loop, and conduct comprehensive end-to-end testing.

| Task ID | Description | Assignee | Story Points | Priority | Status |
|---|---|---|---|---|---|
| JHI-11 | Develop MokletBot Chatbot UI (Floating widget) | Dev 1 | 3 | Medium | To Do |
| JHI-12 | Integrate MokletBot with backend dialog logic | Dev 2 | 5 | Medium | To Do |
| JHI-13 | Develop MokletUlasan Feedback Form (Modal/Page) | Dev 3 | 3 | Low | To Do |
| JHI-14 | Connect MokletUlasan to database for data persistence | Dev 4 | 2 | Low | To Do |
| JHI-15 | E2E Testing, UI Polish, and Bug Fixing across all modules | Dev 5 | 8 | High | To Do |

## Scrum Ceremonies

1. **Sprint Planning:** Conducted at the start of every sprint (2-week cadence).
2. **Daily Standup:** 15-minute sync daily to discuss progress, plan for the day, and flag blockers.
3. **Sprint Review:** End of sprint demo for stakeholders (School administration).
4. **Sprint Retrospective:** Post-sprint analysis on team efficiency and process improvements.

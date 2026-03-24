export type DecisionOption = {
  id: string;
  label: string;
  consequence: string;
  scoreImpact: {
    patientRisk: number;      // negative = increases risk, positive = reduces risk
    evidenceDefensibility: number;
    gmpAlignment: number;
  };
  isDefensible: boolean;
};

export type IntegritySignal = {
  id: string;
  title: string;
  description: string;
  documentRef: string;        // which document this signal appears in
  options: DecisionOption[];
};

export type PressureEvent = {
  id: string;
  triggerSeconds: number;
  type: "email" | "im" | "call";
  sender: string;
  subject: string;
  body: string;
  emotionalTone: "urgent" | "social" | "authoritative";
  responseOptions: { id: string; label: string; consequence: string }[];
};

export type EvidenceDocument = {
  id: string;
  title: string;
  type: "batch-record" | "lab-log" | "deviation-report" | "sign-off-sheet";
  batchId: string;
  date: string;
  author: string;
  content: string[];          // paragraphs/lines of the document
  anomalies: { lineIndex: number; description: string }[];
};

export const BATCH_CONTEXT = {
  batchId: "BC-2024-0847",
  product: "Cardivax 40mg Tablets",
  stage: "Final Release Review",
  productionDate: "14 March 2024",
  reviewDeadline: "18 March 2024 — 17:00",
  facility: "Site 4 — Manufacturing Building C",
};

export const EVIDENCE_DOCUMENTS: EvidenceDocument[] = [
  {
    id: "doc-001",
    title: "Batch Manufacturing Record",
    type: "batch-record",
    batchId: "BC-2024-0847",
    date: "14 March 2024",
    author: "T. Okafor",
    content: [
      "BATCH MANUFACTURING RECORD — BC-2024-0847",
      "Product: Cardivax 40mg Tablets | Facility: Site 4, Building C",
      "Production Start: 14 March 2024, 06:30 | Production End: 14 March 2024, 22:15",
      "—",
      "Step 7.4 — Granulation blend: completed 11:20. Operator: T. Okafor. Equipment: GM-04.",
      "Step 7.5 — In-process check: moisture content 2.8% (limit ≤3.0%). Recorded 12:05.",
      "Step 7.6 — Tablet compression: Start 13:45. Equipment: TC-02.",
      "Step 7.7 — Compression complete: 18:30. Yield: 98.4%.",
      "Step 7.8 — QA in-process review sign-off: 18:55. Signed: J. Mensah.",
      "—",
      "Step 8.1 — Environmental monitoring: sampled 19:10. Results pending.",
      "Step 8.2 — Final visual inspection: completed 20:40. Operator: T. Okafor.",
      "Step 8.3 — Packaging initiation: 21:00. Line: PKG-3.",
      "Step 8.4 — Packaging complete: 22:15. Pallet count: 14.",
    ],
    anomalies: [
      {
        lineIndex: 8,
        description:
          "J. Mensah is listed as QA in-process reviewer. However, Mensah's qualification for this product stage (TC-02 compression QA) expired 28 February 2024. Sign-off may not be valid.",
      },
    ],
  },
  {
    id: "doc-002",
    title: "Laboratory Analysis Log",
    type: "lab-log",
    batchId: "BC-2024-0847",
    date: "15 March 2024",
    author: "R. Vasquez",
    content: [
      "LABORATORY ANALYSIS LOG — BC-2024-0847",
      "Analyst: R. Vasquez | Reviewed by: (pending)",
      "Analysis Date: 15 March 2024",
      "—",
      "Test 1: Assay — Cardivax active ingredient content",
      "  Result: 101.2% of label claim (limit 98.0–102.0%) — PASS",
      "  Instrument: HPLC-07 | Run time: 09:15–10:40",
      "—",
      "Test 2: Dissolution — 45-minute profile",
      "  Result: 87.3% released (limit ≥85%) — PASS",
      "  Instrument: DS-03 | Run time: 11:00–12:00",
      "—",
      "Test 3: Microbial limits",
      "  Sample collected: 14 March 2024, 20:30",
      "  Results reported: 15 March 2024, 14:00",
      "  Total aerobic count: <10 CFU/g (limit ≤100) — PASS",
      "—",
      "Raw data files: stored on shared drive /LAB/BC-2024-0847/",
      "NOTE: Original HPLC chromatogram printouts not yet filed in batch record.",
    ],
    anomalies: [
      {
        lineIndex: 18,
        description:
          "Original HPLC chromatogram printouts are not yet physically filed in the batch record. Raw data traceability is incomplete per GDP requirements. Electronic files exist but paper originals are required by site SOP-LAB-012.",
      },
    ],
  },
  {
    id: "doc-003",
    title: "Deviation Report DR-2024-183",
    type: "deviation-report",
    batchId: "BC-2024-0847",
    date: "14 March 2024",
    author: "L. Chen",
    content: [
      "DEVIATION REPORT — DR-2024-183",
      "Batch: BC-2024-0847 | Reported by: L. Chen | Date: 14 March 2024, 17:20",
      "—",
      "Description: Equipment TC-02 experienced a pressure fluctuation at 16:45.",
      "Duration: approximately 3 minutes. Pressure dropped to 18 kN (lower limit: 19 kN).",
      "Operator action: manually corrected, resumed compression at 16:50.",
      "—",
      "Impact assessment: tablets produced during the 3-minute window are flagged for",
      "additional visual inspection (approx. 1,200 units).",
      "—",
      "Disposition: OPEN",
      "QA review required before batch can be released.",
      "Assigned to: J. Mensah — target close date: 17 March 2024.",
      "—",
      "Correction applied to batch record at 17:45 on 14 March 2024.",
      "Original entry crossed out, initialled: T.O., dated: 14 March 2024.",
    ],
    anomalies: [
      {
        lineIndex: 10,
        description:
          "Deviation DR-2024-183 is still OPEN. Batch cannot be released while an open deviation with QA disposition is unresolved. The assigned reviewer (J. Mensah) is the same person whose qualification is in question.",
      },
    ],
  },
  {
    id: "doc-004",
    title: "Release Sign-Off Sheet",
    type: "sign-off-sheet",
    batchId: "BC-2024-0847",
    date: "18 March 2024",
    author: "System",
    content: [
      "BATCH RELEASE SIGN-OFF — BC-2024-0847",
      "Product: Cardivax 40mg Tablets",
      "—",
      "Checklist item 1: All in-process tests completed and within specification. [ ]",
      "Checklist item 2: Laboratory analysis complete and reviewed. [ ]",
      "Checklist item 3: All deviations closed and dispositioned. [ ]",
      "Checklist item 4: Environmental monitoring results reviewed. [ ]",
      "Checklist item 5: All raw data traceable and filed. [ ]",
      "—",
      "Authorised release signature: _______________________",
      "Date: _______________________",
      "—",
      "Note: Release authority must be a qualified QA person per SOP-QA-001.",
    ],
    anomalies: [],
  },
];

export const INTEGRITY_SIGNALS: IntegritySignal[] = [
  {
    id: "signal-001",
    title: "Unqualified Sign-Off Identified",
    description:
      "J. Mensah signed the QA in-process review for Step 7.8 (tablet compression). Mensah's qualification for this product stage expired on 28 February 2024 — before the batch was produced. The sign-off may be invalid under GDP requirements.",
    documentRef: "doc-001",
    options: [
      {
        id: "opt-a",
        label: "Flag and escalate to QA management for re-review",
        consequence:
          "Correct action. A qualified QA person will review and countersign. Evidence chain is protected.",
        scoreImpact: { patientRisk: 10, evidenceDefensibility: 20, gmpAlignment: 20 },
        isDefensible: true,
      },
      {
        id: "opt-b",
        label: "Accept the sign-off — results were within spec",
        consequence:
          "Accepting an unqualified sign-off weakens the batch record's regulatory defensibility. The qualification gap remains undocumented.",
        scoreImpact: { patientRisk: -15, evidenceDefensibility: -20, gmpAlignment: -25 },
        isDefensible: false,
      },
      {
        id: "opt-c",
        label: "Request Mensah to add a note explaining the situation",
        consequence:
          "An informal note by the same unqualified person does not remediate the qualification gap. This is insufficient under ALCOA+ standards.",
        scoreImpact: { patientRisk: -5, evidenceDefensibility: -10, gmpAlignment: -15 },
        isDefensible: false,
      },
    ],
  },
  {
    id: "signal-002",
    title: "Missing Raw Data — HPLC Chromatograms",
    description:
      "The laboratory analysis log notes that original HPLC chromatogram printouts have not been filed in the batch record. Electronic files exist, but site SOP-LAB-012 requires paper originals. Raw data traceability is incomplete.",
    documentRef: "doc-002",
    options: [
      {
        id: "opt-a",
        label: "Hold release until paper originals are filed and verified",
        consequence:
          "Evidence defensibility is maintained. The delay protects regulatory traceability. This is the ALCOA+ compliant action.",
        scoreImpact: { patientRisk: 10, evidenceDefensibility: 25, gmpAlignment: 20 },
        isDefensible: true,
      },
      {
        id: "opt-b",
        label: "Proceed with electronic files — they contain the same data",
        consequence:
          "Site SOP explicitly requires paper originals. Proceeding without them creates a GDP deviation and inspection risk.",
        scoreImpact: { patientRisk: -10, evidenceDefensibility: -25, gmpAlignment: -20 },
        isDefensible: false,
      },
      {
        id: "opt-c",
        label: "Print new copies from the system and file those",
        consequence:
          "Printing new copies without notation that they are reprints could misrepresent them as originals — a potential data integrity issue. If clearly marked as reprints, this needs QA approval.",
        scoreImpact: { patientRisk: -5, evidenceDefensibility: -15, gmpAlignment: -10 },
        isDefensible: false,
      },
    ],
  },
  {
    id: "signal-003",
    title: "Open Deviation — Batch Cannot Be Released",
    description:
      "Deviation DR-2024-183 (equipment pressure fluctuation during compression) is still open. Batch release is blocked until QA reviews and closes the deviation. The same person whose qualification is in question (J. Mensah) is assigned to close it.",
    documentRef: "doc-003",
    options: [
      {
        id: "opt-a",
        label: "Block release and assign a qualified QA person to close the deviation",
        consequence:
          "Correct action. A qualified QA reviewer independently assesses the deviation impact and closes it with proper documentation. Release only proceeds once complete.",
        scoreImpact: { patientRisk: 15, evidenceDefensibility: 20, gmpAlignment: 25 },
        isDefensible: true,
      },
      {
        id: "opt-b",
        label: "Release the batch — the deviation is minor and results were fine",
        consequence:
          "Releasing a batch with an open QA deviation violates site SOPs and creates significant inspection risk. The deviation's impact has not been formally assessed.",
        scoreImpact: { patientRisk: -25, evidenceDefensibility: -25, gmpAlignment: -30 },
        isDefensible: false,
      },
      {
        id: "opt-c",
        label: "Ask Mensah to close the deviation before release",
        consequence:
          "Having a potentially unqualified person close the deviation does not remediate the original issue. A second integrity problem is added to the record.",
        scoreImpact: { patientRisk: -10, evidenceDefensibility: -15, gmpAlignment: -20 },
        isDefensible: false,
      },
    ],
  },
];

export const PRESSURE_EVENTS: PressureEvent[] = [
  {
    id: "pressure-001",
    triggerSeconds: 120,
    type: "email",
    sender: "D. Hartley — Production Manager",
    subject: "RE: BC-2024-0847 — Customer is waiting",
    body:
      "Hi — just checking in on Cardivax batch 0847. The customer distribution center is holding trucks. They need confirmation of release by 15:00 today or we will miss the delivery window. Can we move this along? Let me know if there are blockers.",
    emotionalTone: "urgent",
    responseOptions: [
      {
        id: "r-a",
        label: "Acknowledge and confirm you are reviewing — cannot release until issues are resolved",
        consequence: "Appropriate response. Production pressure is noted but does not override compliance.",
      },
      {
        id: "r-b",
        label: "Confirm release is imminent to reduce pressure",
        consequence: "Misleading production on status creates false expectations and may accelerate unsafe decisions.",
      },
    ],
  },
  {
    id: "pressure-002",
    triggerSeconds: 300,
    type: "im",
    sender: "J. Mensah",
    subject: "Quick note on 0847",
    body:
      "Hey — I know you're looking at the batch record. My sign-off on 7.8 is fine, I've done this review dozens of times. The qualification renewal was just delayed by admin — it should be sorted by end of week. Don't let that hold things up.",
    emotionalTone: "social",
    responseOptions: [
      {
        id: "r-a",
        label: "Note the context, but confirm that expired qualifications must be resolved before sign-off is valid",
        consequence: "Correct. Qualification status is a factual compliance requirement, not a judgment call.",
      },
      {
        id: "r-b",
        label: "Accept the explanation — you know Mensah is competent",
        consequence: "Personal trust does not substitute for documented qualification. This reasoning is not inspection-defensible.",
      },
    ],
  },
  {
    id: "pressure-003",
    triggerSeconds: 420,
    type: "call",
    sender: "S. Patel — Site Director",
    subject: "Missed call + voicemail",
    body:
      "Hi, this is Sarah Patel. I understand BC-2024-0847 is being held. I've spoken with the customer VP. We need to find a way to release this batch today. I trust your judgment — but I need you to find a compliant path forward. Call me back when you can.",
    emotionalTone: "authoritative",
    responseOptions: [
      {
        id: "r-a",
        label: "Call back and outline the three open compliance issues — request QA resources to resolve them",
        consequence: "Escalating with a clear evidence summary is the correct response. You are requesting support, not bypassing process.",
      },
      {
        id: "r-b",
        label: "Find a way to release today and document retrospectively",
        consequence: "Retrospective documentation without a proper contemporaneous record is a data integrity violation.",
      },
    ],
  },
];

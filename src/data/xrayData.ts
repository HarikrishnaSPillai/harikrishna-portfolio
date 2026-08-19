export interface XRayEntry {
    term: string;
    category: "Technology" | "Concept" | "Domain" | "Role";
    summary: string;
    details: string;
    relatedChapters: string[];
}

export const xrayEntries: Record<string, XRayEntry> = {
    "Databricks": {
        term: "Databricks",
        category: "Technology",
        summary: "Unified analytics and AI platform built on Apache Spark.",
        details: "Used at CIBC and enterprise projects for high-scale data engineering, Delta Lake table architecture, and machine learning pipelines.",
        relatedChapters: ["Experience", "Projects"]
    },
    "Azure": {
        term: "Azure",
        category: "Technology",
        summary: "Microsoft cloud computing suite used for enterprise data warehousing.",
        details: "Used for deploying Data Factory pipelines, Azure Data Lake Storage (ADLS Gen2), and secure enterprise identity management.",
        relatedChapters: ["Experience", "Certifications"]
    },
    "SQL": {
        term: "SQL",
        category: "Technology",
        summary: "Structured Query Language for database query and reconciliation.",
        details: "Core competency used for writing complex analytical queries, data quality reconciliation scripts, and relational schemas across Oracle, Postgres, and SQL Server.",
        relatedChapters: ["Experience", "Projects", "Resume"]
    },
    "SwiftUI": {
        term: "SwiftUI",
        category: "Technology",
        summary: "Apple's declarative UI framework for iOS and macOS software development.",
        details: "Used in personal software initiatives like Budjet, LockedIn, and mobile productivity tools with custom dynamic components.",
        relatedChapters: ["Projects"]
    },
    "Business Analysis": {
        term: "Business Systems Analysis",
        category: "Role",
        summary: "Bridging business domain requirements with scalable engineering architecture.",
        details: "Translating complex operational workflows, regulatory compliance specs, and stakeholder requirements into functional specifications and auditable systems.",
        relatedChapters: ["Experience", "About", "Resume"]
    },
    "AI Readiness": {
        term: "AI & Data Readiness",
        category: "Concept",
        summary: "Structuring and cleansing enterprise data for machine learning models.",
        details: "Ensuring metadata standards, governance, lineage, and data hygiene so AI models produce reliable, compliant, and non-hallucinatory outcomes.",
        relatedChapters: ["Experience", "About", "Projects"]
    }
};

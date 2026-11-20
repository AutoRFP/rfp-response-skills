# Company Capabilities Reference

Company capabilities, offerings, certifications, and constraints. The RFP Shredder skill maps RFP requirements against this file.

**Update this file whenever your product, certifications, or constraints change.**

---

## Company Overview

| Attribute | Detail |
|---|---|
| Company Name | Vaultline |
| Founded | 2016 |
| Headquarters | London, United Kingdom |
| Employees | ~2,000 |
| Industry Focus | Financial Services (Banking, Insurance, Wealth Management) |
| Primary Buyers | Tier 1 and Tier 2 banks, central banks, regional banking groups |
| ARR | $180M+ |
| Funding | Series D |

---

## Product: Vaultline Platform

Unified regulatory reporting and compliance operations platform purpose-built for banking and financial services. Consolidates regulatory data aggregation, report generation, submission management, and audit trail into a single platform.

### Core Modules

| Module | Description |
|---|---|
| Regulatory Reporting Engine | Automated generation of regulatory reports across multiple jurisdictions (APRA, PRA, FCA, OCC, ECB). Supports XBRL, CSV, XML, and proprietary submission formats. |
| Data Aggregation Layer | Connects to core banking systems, data warehouses, and GL platforms to source, validate, and reconcile regulatory data. Pre-built connectors for common banking platforms. |
| Compliance Workflow Manager | Configurable workflows for review, approval, sign-off, and submission. Role-based access controls and audit logging. |
| Audit & Evidence Vault | Immutable audit trail for every data point, calculation, and approval step. Read-only permissioned views for examiners and auditors. |
| Dashboard & Analytics | Real-time dashboards for compliance status, submission timelines, exceptions, and data quality metrics. |
| Policy & Control Library | Centralized library of compliance policies, controls, and control test results mapped to regulatory frameworks. |

### Key Platform Capabilities

- Multi-jurisdiction support: US, UK, EU, APAC, Middle East
- Multi-entity and group consolidation reporting
- Configurable data validation rules and exception handling
- Version-controlled report templates
- Scheduled and ad-hoc report generation
- API-first architecture with RESTful APIs and webhook support
- Single Sign-On (SSO) via SAML 2.0 and OIDC
- Role-based access control (RBAC) with granular permissions
- Real-time collaboration with commenting and task assignment
- Bulk data import/export (CSV, Excel, API)

---

## Deployment Model

| Attribute | Detail |
|---|---|
| Deployment | **SaaS only (multi-tenant, public cloud)** |
| Cloud Provider | AWS (primary), Azure (secondary, available for select regions) |
| On-Premises | **Not offered. Vaultline does not support on-premises or private cloud deployments.** |
| Data Residency | US (Virginia), UK (London), EU (Frankfurt), Australia (Sydney), Singapore, Canada (Montreal) |
| Environments | Production, Staging, and Sandbox included as standard |

**CONSTRAINT: Vaultline is SaaS-only. Any RFP that mandates on-premises or private cloud hosting as a hard requirement is a Non-Compliant deal-breaker.**

---

## Integrations

### Pre-Built Connectors

| System Type | Supported Platforms |
|---|---|
| Core Banking | Temenos T24/Transact, FIS Modern Banking Platform, Finastra Fusion, Thought Machine Vault |
| ERP / GL | SAP S/4HANA, Oracle Financials Cloud, Workday Financials |
| Data Warehouse | Snowflake, Databricks, Google BigQuery, AWS Redshift |
| Identity & Access | Okta, Microsoft Entra ID (Azure AD), Ping Identity |
| Collaboration | Microsoft Teams, Slack, Jira, ServiceNow |
| File Transfer | SFTP, AWS S3, Azure Blob Storage |

### API & Custom Integration

- RESTful API with full CRUD operations
- Webhook support for event-driven workflows
- GraphQL endpoint (beta)
- Bulk data API for large dataset ingestion
- API rate limits: 10,000 requests/hour (standard), 50,000 requests/hour (enterprise)

---

## Security & Compliance Certifications

| Certification / Standard | Status |
|---|---|
| SOC 2 Type II | Current (renewed annually) |
| ISO 27001:2022 | Certified |
| ISO 27701 (Privacy) | Certified |
| PCI DSS Level 1 | **Not certified.** Vaultline does not process, store, or transmit cardholder data. |
| CSA STAR Level 2 | Certified |
| GDPR | Compliant (EU data residency available, DPA provided) |
| CCPA | Compliant |
| APRA CPS 234 | Compliant (alignment documentation available) |
| FCA/PRA Operational Resilience | Compliant |
| DORA (Digital Operational Resilience Act) | Compliant |
| Cyber Essentials Plus (UK) | Certified |
| NIST CSF | Aligned (mapping document available) |

### Security Controls

- Encryption at rest: AES-256
- Encryption in transit: TLS 1.2+
- Key management: AWS KMS with customer-managed key option
- Penetration testing: Annual third-party (report available under NDA)
- Vulnerability management: Continuous scanning, SLA-based remediation
- Incident response: Documented IR plan, 24/7 security operations
- Business continuity: RPO < 1 hour, RTO < 4 hours
- Disaster recovery: Multi-AZ with cross-region failover
- Access controls: MFA enforced, least-privilege model, quarterly access reviews

---

## Implementation & Onboarding

| Attribute | Detail |
|---|---|
| Typical timeline | 8-16 weeks depending on scope and integrations |
| Methodology | Phased (Discovery, Configuration, Integration, UAT, Go-Live) |
| Professional services | 120+ consultants with banking domain expertise |
| Customer success | Dedicated CSM post-implementation |
| Training | On-platform guided tours, live sessions, admin certification program |
| Data migration | Supported with dedicated tooling and specialist support |

---

## Support

| Tier | Coverage |
|---|---|
| Standard | Business hours (Mon-Fri, 8am-6pm local), email and portal |
| Premium | 24/7, phone and portal, 1-hour P1 response SLA |
| Enterprise | 24/7, named support engineer, quarterly business reviews, 30-minute P1 response SLA |

---

## Customers & References

| Client | Type | Region | Use Case |
|---|---|---|---|
| Barrington National Bank | Tier 1 Retail & Commercial | UK | Full regulatory reporting across PRA/FCA |
| Pacific Union Bank | Tier 2 Regional | Australia | APRA reporting and compliance workflow |
| Rhein-Main Landesbank | Tier 1 Universal | Germany | ECB regulatory reporting, multi-entity consolidation |
| Coastal Federal Credit Union | Large Credit Union | US | OCC/NCUA reporting and audit evidence |
| Sterling Private Bank | Private Bank | Switzerland | Cross-jurisdiction reporting (FINMA, FCA) |

150+ banking clients globally. Named "Top 10 RegTech Platforms for Banking" (2025).

---

## Constraints & Known Limitations

These are areas where Vaultline cannot meet requirements. The skill uses this section to flag Non-Compliant items.

| Constraint | Detail |
|---|---|
| **No on-premises deployment** | SaaS-only. Cannot deploy on-prem or in customer-managed private cloud. |
| **No PCI DSS certification** | Not applicable to our use case, but if an RFP mandates PCI DSS for all vendors, this is a gap. |
| **No real-time transaction processing** | Vaultline is a reporting and compliance platform, not a transaction system. |
| **Custom report formats** | Highly bespoke formats beyond supported standards may require professional services and extended timeline. |
| **Languages** | Platform UI in English, German, French, Spanish. Other languages require localization engagement. |
| **Max concurrent users** | Standard: up to 500. Enterprise: up to 5,000. Beyond 5,000 requires architectural review. |

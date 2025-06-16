---
title: "How to Write Great Release Notes That Users Love"
meta_title: "How to Write Great Release Notes That Users Love"
description: "Practical templates for writing clear, user-centered release notes for new features and bug fixes."
summary: "A practical guide to writing effective release notes, with ready-to-use templates for announcing features and documenting bug fixes. Learn to communicate product updates with clarity and impact."
date: 2024-04-20
image: "/images/blog/blackthorn.png"
# image: "https://res.cloudinary.com/lilian-photos/image/upload/v1743427957/blog-images/blackthorn_1920.png"
categories: ["Tech Comm"]
author: "Lilian Lee"
tags: ["Release Notes"]
draft: false
---

**Release notes** are a crucial part of software documentation, helping users understand product changes, new features, improvements, and bug fixes. Well-crafted release notes do more than just inform—they enhance user experience, facilitate smoother product adoption, and even reduce the burden on support teams.

However, writing **great release notes** isn’t just about listing changes. It requires clarity, structure, and a user-focused approach to ensure updates are useful and easy to understand. In this post, I’ll briefly introduce release notes, explore their value for both users and internal teams, and key elements to include. I’ll also share practical **templates** for writing clear, user-centered release notes for **new features** and **bug fixes**, helping you communicate product updates with impact.

## Understanding release notes

**Release notes** are a common type of documentation in technical writing, playing a crucial role in helping users understand and effectively use a product. From my first year as a **Technical Writer**—about seven years ago—release notes have been one of the key documentation types I regularly handled.

Taking the database company I work for as an example, as the company and its products have evolved, the presentation and scope of release notes have continuously improved and matured. 

In recent years, while my team members primarily handle release notes, I still keep an eye on related issues and solutions, especially those affecting users and customers. Occasionally, when a release involves many new features or the team is understaffed, I step in to assist.

Delivering high-quality, user-friendly release notes requires significant effort and attention to detail.

### What are release notes

**Release notes** are documents that describe changes in a product release. These changes typically include new features, compatibility changes, deprecated or removed features, performance enhancements, general improvements, and bug fixes.

### The Value of Release Notes

Well-crafted release notes serve multiple purposes, benefiting both external users and internal teams.

- **For users and customers**: Release notes help them understand what’s new in a product, what issues have been fixed, and any compatibility changes. This information assists them in deciding whether to adopt or upgrade to a new version, make better use of the product, or determine the right time for related application operations.
- **For internal teams**: Official release notes keep different teams or roles informed about product updates, including new feature names and descriptions, bug fixes, and performance improvements. This consistency ensures alignment when supporting customers, preparing marketing materials, and addressing user feedback.

### Key components of release notes

Well-structured release notes typically include the following sections to provide users with a clear and comprehensive overview of product changes. Since different products have varying needs, flexibility is essential when structuring release notes. The level of detail might also vary depending on the product’s development stage.

1. **Feature highlights (optional)**

    If a release includes numerous changes, a “feature highlights” section at the beginning helps users quickly identify the most important updates without needing to read the entire document.

2. **New features**

    Clearly list newly introduced features, including: what the feature does, its value to users, how users can access or enable it.

3. **Performance enhancements**

    Describe performance optimizations, often including measurable improvements such as:

    - Performance improvements in specific scenarios
    - Required configurations or actions to benefit from the improvements
    - Links to performance tuning guides or additional documentation
    - If available, include a link to a detailed performance benchmark report

4. **Important notices**

    Highlight critical changes that might impact users, such as:

    - Compatibility updates: clearly specify version compatibility to help users plan upgrades.
    - Deprecation and removal of features: list features that will be deprecated, have been deprecated, or have been removed.

5. **General improvements**

    List various product improvements and optimizations, such as enhanced usability, helping users anticipate a better experience in the new version.

6. **Bug fixes**

    Provide detailed descriptions of fixed bugs or resolved issues, helping users understand the progress in product stability and reliability.

7. **Community contributions (optional)**

    For open-source products, recognize contributors who helped improve the release by listing their GitHub IDs or usernames as a token of appreciation.

### How release notes differ across products

The frequency, length, and effort required for release notes vary by product type.

Generally, cloud-based products iterate frequently (weekly or multiple times per week), and the individual release notes tend to be short, often covering only a few changes. In contrast, major versions of complicated enterprise software are released less frequently (for example, every 2~6 months or even longer), and the release notes often contain many new features and improvements.

Even for the same product, release frequency might vary based on development stage, market demands, and engineering resources. Earlier in a product’s lifecycle, releases might be less frequent, but as user adoption grows and the company scales, the pace of releases tends to accelerate.

If you’re interested in real-world examples, check out the following release notes from TiDB:

- [TiDB 7.5.0 Release Notes | TiDB Docs](https://docs.pingcap.com/tidb/stable/release-7.5.0/)
- [TiDB Cloud Release Notes | TiDB Docs](https://docs.pingcap.com/tidbcloud/tidb-cloud-release-notes/)

## How to write release notes for new features

After understanding the basics of release notes, I’ll dive deeper into writing effective release notes for new features and share a practical content template that has worked well in practice.

In the early stages of a product, release notes are often simple—sometimes, automatically generated notes suffice. However, as the product matures and its user base expands, the format and scope of release notes evolve accordingly, requiring more time and effort to refine and enhance.

Well-crafted release notes not only improve the user experience but also lighten the support burden across teams. When key information is unclear or incomplete, users and customers are more likely to reach out with additional inquiries.

### Template for new feature release notes

A well-defined template should be shared with all stakeholders involved in drafting, editing, and reviewing release notes. Otherwise, it won’t effectively standardize the content.

The release note template for a new feature is as follows:

{{< notice "Template for new feature release notes" >}}

- **[Brief description of the new feature]**

    Common phrasing: “Support/Introduce/Add/Provide xxx”

- **[Detailed description of the new feature]**

    Write at least three sentences that answer the following questions:

    1. **[What] What is the new feature?**

        From the user’s perspective, describe:

        - What changes this new feature introduces.
        - What it means for users.
        - In what scenarios it can be used.

    2. **[Why] What value does this new feature provide to users?**

        To answer this question, explain:

        - Which users or scenarios benefit the most from this feature.
        - The challenges or pain points users faced before this feature is introduced.
        - How this feature addresses existing issues, what advantages it offers, and what improvements it brings.

    3. **[How] How can users use this new feature?**

        When describing usage, include:

        - A concise explanation or example if the feature is easy to use.
        - A link to detailed documentation if further instructions are needed.
        - Any limitations or important usage notes users should be aware of.

{{< /notice >}}

If you want to see examples of new feature release notes following the template above, see [TiDB 7.5.0 feature details](https://docs.pingcap.com/tidb/stable/release-7.5.0/#feature-details).

## How to write release notes for bug fixes

Unlike new feature release notes, which are often detailed and structured, bug fix notes are typically brief, often just a single sentence. However, writers should still focus on the user, using clear descriptions to effectively convey the fix’s value and impact.

### Common pitfalls in bug fix release notes

You might think, *why put much effort into bug fix release notes? Can’t we just extract them automatically from a tool?*

According to my experience, even for bug fixes, Technical Writers need to dedicate time and effort to refining, peer-reviewing, and translating release notes as part of the documentation process. During refinement, a Technical Writer ensures that each bug fix description is concise, clear, and easy to understand. If the description is unclear, they might check the related GitHub issue to understand the bug and its resolution. If the issue description is too vague or abstract, they will reach out to the corresponding developer for clarification.

If a bug fix note lacks clarity or completeness, users searching for specific fixes in the release notes cannot find them. This could lead to misunderstandings—users might assume a bug remains unfixed or fail to grasp the issue’s impact.

- For users, unclear bug fix notes could delay upgrade decisions or even cause critical application problems.
- For product vendors, this often results in additional technical support, engineering, and documentation efforts to handle urgent customer issues.

### Template for bug fix release notes

Since bug fix release notes are typically brief and release timelines are often tight, enforcing a strict template for every fix might not be practical. However, during review, it is essential to ensure that each description is clear, precise, and complete.

If a more structured approach is preferred or users request improvements to a bug fix description, the following template can serve as a reference.

{{< notice "Template for bug fix release notes" >}}

- When writing or reviewing a bug fix note, ensure it answers the following questions:

    1. **[What] What bug is fixed?**

        Clearly state what the bug is.

    2. **[Why] What value does this fix provide to users?**

        Describe the scenarios in which this bug affects users, and the issues or consequences it might cause.

- **Common Sentence Patterns:**

    - Fix(ed) the issue that **[cause]** lead to **[impact]**
    - Fix(ed) the issue that **[problem]** in/when **[scenario]**
    - Fix(ed) the issue that **[sth.]** cause **[undesired outcome]** in **[condition]**

{{< /notice >}}

**Example:**

- **Unclear:** *Fix the potential memory leak issue in memory tracker*
- **Clear:** *Fix the issue that memory leaks and duration continues to increase when connecting to TiDB using the binary protocol and executing a large number of `PREPARE` and `EXECUTE` statements*

By following this template, bug fix release notes can effectively communicate critical information to users, reducing confusion and support requests while improving the overall upgrade experience.

## Final thoughts

By applying the templates and practices shared in this post, you can make your release notes more valuable and impactful. If you’re also involved in preparing release notes and have experiences to share, feel free to leave a comment. I’d love to exchange insights!

<p style="color: #808080;">If you’d like to read this content in Chinese, check out the following articles:</p>

- [如何理解产品的 Release Notes](https://zhuanlan.zhihu.com/p/688154830)
- [如何写好产品新特性的 Release Notes](https://zhuanlan.zhihu.com/p/688754038)
- [如何写好问题修复的 Release Notes](https://zhuanlan.zhihu.com/p/689945445)

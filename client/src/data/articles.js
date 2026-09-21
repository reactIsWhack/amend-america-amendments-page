const articles = [
    {
        number: 1,
        romanNumeral: "I",
        category: 'Individual & Economic Rights',
        summary: "Guarantees equal citizenship for all Americans and prohibits the creation of second-class citizens. It protects citizenship from political abuse while ensuring equal rights and protections under the law.",
        title: 'Citizenship',
        fullDescriptionParagraphs: [
            "This article exists to answer a basic question: What does it really mean to be an American citizen? While the Constitution guarantees many rights, it does not clearly state that all citizens must be treated equally or protect citizenship itself from political abuse.",
            'This article ensures that every citizen has the same legal status, rights, and protections regardless of race, religion, sex, wealth, political beliefs, or other personal characteristics. It also prevents the government from creating "first-class" and "second-class" citizens, protects naturalized citizens from unfair treatment, and ensures that citizenship cannot be taken away except in cases of proven fraud and through due process of law.'
        ]
    },
    {
        number: 2,
        romanNumeral: "II",
        category: 'Voting & Elections',
        summary: "Establishes voting as a fundamental constitutional right and removes unnecessary barriers to participation. It guarantees equal access to voting, automatic voter registration, and extends voting rights to citizens age 16 and older.",
        title: 'Voting & Elections',
        fullDescriptionParagraphs: [
            "This article exists to protect and strengthen every citizen's right to vote. Today, voting rules vary widely across the country, and concerns about voter suppression, registration barriers, ballot access, and unequal election administration continue to create controversy and confusion. This article establishes voting as a fundamental constitutional right, prohibits unnecessary barriers to participation, protects voters from improper removal from voter rolls, and ensures that every lawful vote is counted. It also creates automatic voter registration and lowers the voting age to sixteen, making democratic participation more accessible while preserving election security and due process."
        ]
    },
    {
        number: 3,
        romanNumeral: "III",
        category: 'Voting & Elections',
        summary: "Establishes voting as a fundamental constitutional right and removes unnecessary barriers to participation. It guarantees equal access to voting, automatic voter registration, and extends voting rights to citizens age 16 and older.",
        title: 'Election Integrity',
        fullDescriptionParagraphs: [
            "This article exists to ensure that election results accurately reflect the will of the people and that Americans can trust the outcome of every election. Public confidence in elections has been weakened by concerns about gerrymandering, unequal voting power, election administration, security, and partisan interference.",
            "This article requires that every vote carry equal weight, establishes national standards for election security and vote counting, and makes election systems transparent and auditable while protecting ballot secrecy. It also prohibits the manipulation of election rules, administration, or results for political advantage, helping ensure that elected officials are chosen by voters rather than by those who control the system."
        ]
    },
    {
        number: 4,
        romanNumeral: "IV",
        category: 'Voting & Elections',
        summary: "Abolishes the Electoral College and elects the President and Vice President by direct national popular vote. Every vote would count equally regardless of where a voter lives.",
        title: 'Executive Popular Vote',
        fullDescriptionParagraphs: [
            "This article exists to ensure that every American vote for President carries the same weight, regardless of where the voter lives. Under the current Electoral College system, presidential elections are decided through state-by-state electoral votes rather than by the national popular vote, causing many voters to feel their voices matter less than others. This article replaces the Electoral College with a direct national popular vote, making the candidate who receives the most votes nationwide the winner.",
            "It also establishes procedures to ensure election results are certified accurately and on time, preventing administrative disputes or political interference from overturning the will of the voters."
        ]
    },
    {
        number: 5,
        romanNumeral: "V",
        category: 'Voting & Elections',
        summary: "Ends partisan gerrymandering by requiring legislative districts to be drawn through independent, politically neutral processes. The goal is fair representation rather than partisan advantage.",
        title: 'Independent Redistricting',
        fullDescriptionParagraphs: [
            "This article exists to stop politicians from choosing their voters instead of voters choosing their politicians. Today, the people who benefit from electoral district boundaries are often involved in drawing those boundaries, creating opportunities for gerrymandering and unfair political advantages.",
            "This article bans partisan redistricting and requires all legislative districts to be drawn through independent, politically neutral processes. By removing politicians and political parties from the map-drawing process, it helps ensure that elections are more competitive, representation is fairer, and every vote carries greater influence."
        ]
    },
    {
        number: 6,
        romanNumeral: "VI",
        category: 'Civic Education',
        summary: "Requires comprehensive, nonpartisan civics education in schools, colleges, and workforce training programs. It ensures every American has access to the knowledge needed for informed democratic participation.",
        title: 'Guaranteed Civics Education',
        fullDescriptionParagraphs: [
            "This article exists because a healthy democracy depends on citizens understanding how their government works and how they can participate in it. Many Americans leave school with only a limited understanding of the Constitution, voting, government institutions, media literacy, and the responsibilities of citizenship, making it harder to hold leaders accountable and make informed decisions.",
            "This article requires nonpartisan civics education throughout primary school, secondary school, higher education, and workforce training programs, while also making civic learning resources freely available to all Americans. By ensuring that every citizen has access to a basic understanding of government, rights, responsibilities, and critical thinking skills, it helps create a more informed, engaged, and effective democracy."
        ]
    },
    {
        number: 7,
        romanNumeral: "VII",
        category: 'Money, Political Influence, & Corporate Power',
        summary: "Requires comprehensive, nonpartisan civics education in schools, colleges, and workforce training programs. It ensures every American has access to the knowledge needed for informed democratic participation.",
        title: 'Money in Politics',
        fullDescriptionParagraphs: [
            "This article exists because many Americans believe that money has gained too much influence over government and that ordinary citizens often struggle to compete with wealthy individuals, corporations, and special interests for political attention. As campaign costs rise and large sums of money continue to flow into elections and lobbying efforts, public trust in democratic institutions has declined.",
            "This article seeks to restore political equality by limiting the influence of money in politics, creating publicly financed election systems, and requiring greater transparency around political spending and lobbying activities. By making it easier for qualified candidates to run for office regardless of wealth and ensuring the public can see who is trying to influence government decisions, the article aims to make government more accountable to citizens rather than concentrated economic power."
        ]
    },
]

export default articles;

/*
CATEGORIES:

Voting & Elections: II, III, IV, V, XXVII
Civic Education (teaching people about how the gov. works) & Information Integrity: VI, X, XI, XII
Money, Political Influence, & Corporate Power: VII, IX, XIII
Government Ethics (not abusing power for personal/party benefit): VIII, XIX, XXIV
Individual and Economic Rights: I, XIV, XV, XVI, XVII, XVIII
Checks and Balances: XX, XXI, XXII, XXIII, XXV
Constitutional Amendment Process: XXVI, XXVIII
*/
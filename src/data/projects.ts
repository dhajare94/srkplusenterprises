export interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    shortDesc: string;
    description: string;
    coverImage: string;
    gallery: string[];
    info: {
        client: string;
        developer?: string;
        area: string;
        duration: string;
        type: string;
        completion: string;
    };
}

export const projects: Project[] = [
    {
        id: 'malodaya-hinjewadi-pune',
        title: 'Malodaya Hinjewadi Pune',
        category: 'RCC Work',
        location: 'Pune',
        shortDesc: 'RCC Works',
        description: `The Malodaya Hinjewadi Pune stands as a testament to our engineering excellence... 
        
We collaborated with leading architects to deliver this massive commercial structure on time and within budget.`,
        coverImage: 'https://i.ibb.co/Qv79Wcb1/Home.jpg',
        gallery: [
            'https://i.ibb.co/ymCtw0Hm/Home2.jpg',
            'https://i.ibb.co/Hfk0NZB3/Home3.jpg',
            'https://i.ibb.co/Q3VB0THr/site-view2.png',
            'https://i.ibb.co/hRSTj1cr/site-view3.png',
            'https://i.ibb.co/bjpFcsNT/site-view.png',
            'https://i.ibb.co/Qv79Wcb1/Home.jpg'

        ],
        info: {
            client: 'Nexus Group',
            developer: 'Nexus Properties Ltd.',
            area: '12,500 SQM',
            duration: '18 Months',
            type: 'Commercial Base',
            completion: 'August 2024'
        }
    },
    {
        id: 'balaji-school-kalamboli',
        title: 'Shree Balaji School Kalamboli',
        category: 'RCC Work',
        location: 'Kalamboli, Panvel',
        shortDesc: 'RCC Work',
        description: 'In Shree Balaji School Kalamboli, we do RCC Work for the school building.',
        coverImage: 'https://i.ibb.co/5gWptXRz/unnamed.jpg',
        gallery: [
            'https://i.ibb.co/5gWptXRz/unnamed.jpg',
            'https://i.ibb.co/YFdHHwKb/unnamed.jpg',

        ],
        info: {
            client: 'Aura Developers',
            developer: 'Balaji Developers',
            area: '8,000 SQM',
            duration: '12 Months',
            type: 'Residential',
            completion: 'January 2025'
        }
    },
    {
        id: 'AR-Vrundavan-Society',
        title: 'AR Vrundavan',
        category: 'RCC Work',
        location: 'Taloja, Mumbai',
        shortDesc: 'RCC Work',
        description: 'In AR Vrundavan Society, we do RCC Work for the society building.',
        coverImage: 'https://i.ibb.co/3YBrv57B/pixelcut-export-2025-02-05-T123554-998.png',
        gallery: [
            'https://i.ibb.co/3YBrv57B/pixelcut-export-2025-02-05-T123554-998.png',
            'https://i.ibb.co/CKKwBqTn/pixelcut-export-2025-02-06-T131515-833.jpg'
        ],
        info: {
            client: 'Vertex Holdings',
            developer: 'AR Construction',
            area: '25,000 SQM',
            duration: '24 Months',
            type: 'Commercial High-Rise',
            completion: 'March 2026'
        }
    },
    {
        id: 'sanakalp-group-pushpaknagar',
        title: 'Sanakalp Group ',
        category: 'RCC Work',
        location: 'Pushpaknagar, Mumbai',
        shortDesc: 'RCC Work',
        description: 'In Sanakalp Group Pushpaknagar, we do RCC Work for the society building.',
        coverImage: 'https://i.ibb.co/Lz8LWsGM/sector-8-pushpaknagar.jpg',
        gallery: [
            'https://i.ibb.co/Lz8LWsGM/sector-8-pushpaknagar.jpg',
            'https://i.ibb.co/9SCCq2f/atharva-sankalp-project-project-large-image1-8714.webp'
        ],
        info: {
            client: 'Zenith Corp',
            developer: 'Roswalt Realty',
            area: '4,500 SQM',
            duration: '6 Months',
            type: 'Corporate Interior',
            completion: 'September 2023'
        }
    },
    {
        id: 'Roswalt-Zaiden',
        title: 'Roswalt Zaiden',
        category: 'RCC Work',
        location: 'Oshiwara, Mumbai',
        shortDesc: 'RCC Work',
        description: 'In Roswalt Zaiden,',
        coverImage: 'https://i.ibb.co/SXZ6HyhV/1771670622.webp',
        gallery: [
            'https://i.ibb.co/SXZ6HyhV/1771670622.webp',
            'https://i.ibb.co/Vck3bzPq/Roswalt-Zaiden-About-US-21022026104936.webp'
        ],
        info: {
            client: 'Zenith Corp',
            developer: 'Roswalt Realty',
            area: '4,500 SQM',
            duration: '6 Months',
            type: 'Corporate Interior',
            completion: 'September 2023'
        }
    },
    {
        id: 'Balaji-heights',
        title: 'Balaji Heights',
        category: 'RCC Work',
        location: 'Rees-Rasayani, Mumbai',
        shortDesc: 'RCC Work',
        description: 'In Balaji Heights,',
        coverImage: 'https://i.ibb.co/rG9ctFjp/pixelcut-export-2025-01-24-T202010-117.jpg',
        gallery: [
            'https://i.ibb.co/rG9ctFjp/pixelcut-export-2025-01-24-T202010-117.jpg',
            'https://i.ibb.co/Z1hc2Dgr/download-2025-12-09-T125550-596-1.jpg'
        ],
        info: {
            client: 'Zenith Corp',
            developer: 'MR Developers',
            area: '4,500 SQM',
            duration: '6 Months',
            type: 'Corporate Interior',
            completion: 'September 2023'
        }
    },
    {
        id: 'azure-Badlapur',
        title: 'Azure Badlapur',
        category: 'Interior Finishing',
        location: 'Badlapur, Mumbai',
        shortDesc: 'Interior Finishing',
        description: 'In Azure Badlapur,',
        coverImage: 'https://i.ibb.co/BKvKrqdC/bedroom.png',
        gallery: [
            'https://i.ibb.co/G4r5Pv9N/Bedroom2.png',
            'https://i.ibb.co/tPCb6dwC/Bedroom3.png',
            'https://i.ibb.co/93hhfJ8G/Hall.png'
        ],
        info: {
            client: 'Zenith Corp',
            developer: 'Azure Developers',
            area: '4,500 SQM',
            duration: '6 Months',
            type: 'Corporate Interior',
            completion: 'September 2023'
        }
    },
    {
        id: 'Felx-apt-chembur',
        title: 'Felx Apt Chembur',
        category: 'Interior Finishing',
        location: 'Chembur, Mumbai',
        shortDesc: 'Interior Finishing',
        description: 'In Felx Apt Chembur,',
        coverImage: 'https://i.ibb.co/JRRFH5qz/Hall.png',
        gallery: [
            'https://i.ibb.co/wFST8qQs/Kitchen.png',
            'https://i.ibb.co/yFjDwZpG/Door.png',
            'https://i.ibb.co/JRRFH5qz/Hall.png'
        ],
        info: {
            client: 'Zenith Corp',
            developer: 'Unknown',
            area: '4,500 SQM',
            duration: '6 Months',
            type: 'Corporate Interior',
            completion: 'September 2023'
        }
    },
    {
        id: 'neelkanth-dham-kalamboli',
        title: 'Neelkanth Dham Kalamboli',
        category: 'Interior Finishing',
        location: 'Kalamboli, Mumbai',
        shortDesc: 'Interior Finishing',
        description: 'In Neelkanth Dham Kalamboli',
        coverImage: 'https://i.ibb.co/231yPg30/Hall-2.png',
        gallery: [
            'https://i.ibb.co/VWzqZRX5/Hall.png',
            'https://i.ibb.co/6M6x6Rd/Kitchen.png',
            'https://i.ibb.co/rRHC4Lv6/Cooridor.png'
        ],
        info: {
            client: 'Zenith Corp',
            developer: 'Unknown',
            area: '4,500 SQM',
            duration: '6 Months',
            type: 'Corporate Interior',
            completion: 'September 2023'
        }
    },
    {
        id: 'viraj-villa-beed',
        title: 'Viraj Villa Beed',
        category: 'Interior Finishing',
        location: 'Beed, Maharashtra',
        shortDesc: 'Interior Finishing',
        description: 'In Viraj Villa Beed',
        coverImage: 'https://i.ibb.co/ZpjzZVF6/Bedroom-Upper-Floor-jpg.jpg',
        gallery: [

            'https://i.ibb.co/ZpjzZVF6/Bedroom-Upper-Floor-jpg.jpg',
            'https://i.ibb.co/Dx9cQVG/Bedroom-Upper-Floor2-jpg.jpg',
            'https://i.ibb.co/2Yd1ZfsD/Devmandir-Ground-Floor.jpg',
            'https://i.ibb.co/5gjn3Q1F/Ground-Bedroom-Wardrobe-jpg.jpg',
            'https://i.ibb.co/6cxbrwdW/Ground-Floor-Bedroom-jpg.jpg',
            'https://i.ibb.co/B5RwsvVn/Ground-Floor-Hall-jpg.jpg',
            'https://i.ibb.co/b50nt0mb/Ground-Floor-Hall-2-jpg.jpg',
            'https://i.ibb.co/y3zx6dX/Ground-Kitchen.png',
            'https://i.ibb.co/7ds5Zb4t/Hall-Upper-Floor-jpg.jpg',
            'https://i.ibb.co/mFzzmPGc/TV-panel-Ground-Floor-jpg.jpg',
            'https://i.ibb.co/ZzqjdV3N/Upper-floor-Kitchen-jpg.jpg'
        ],
        info: {
            client: 'Om Shendge',
            developer: 'Om Shendge-Personal',
            area: '4,500 SQM',
            duration: '6 Months',
            type: 'Corporate Interior',
            completion: 'September 2023'
        }
    },
    {
        id: 'platinum-experia',
        title: 'Platinum Experia',
        category: 'Interior Finishing',
        location: 'Kalamboli, Panvel',
        shortDesc: '2BHK',
        description: 'In Platinum Experia',
        coverImage: 'https://i.ibb.co/67LZK6Bv/Hall2.png',
        gallery: [

            'https://i.ibb.co/67LZK6Bv/Hall2.png',
            'https://i.ibb.co/0VmjgGcF/Bedroom.png',
            'https://i.ibb.co/zh7g6gBv/Hall.png'
        ],
        info: {
            client: 'Unknown',
            developer: 'Unknown',
            area: '4,500 SQM',
            duration: '6 Months',
            type: 'Corporate Interior',
            completion: 'September 2023'
        }
    },
    {
        id: 'platinum-experia-kalamboli',
        title: 'Platinum Experia',
        category: 'Interior Finishing',
        location: 'Kalamboli, Panvel',
        shortDesc: '3BHK',
        description: 'In Platinum Experia',
        coverImage: 'https://i.ibb.co/xqLhsbS6/Hallbox.png',
        gallery: [

            'https://i.ibb.co/xqLhsbS6/Hallbox.png',
            'https://i.ibb.co/WvjH9f2L/Bedroom.png',
            'https://i.ibb.co/KxRRdK3X/Hall-Land.png'
        ],
        info: {
            client: 'Unknown',
            developer: 'Unknown',
            area: '4,500 SQM',
            duration: '6 Months',
            type: 'Corporate Interior',
            completion: 'September 2023'
        }
    },
    {
        id: 'sai-world-empire',
        title: 'Sai World Empire',
        category: 'Interior Finishing',
        location: 'Kharghar, Navi Mumbai',
        shortDesc: '5BHK',
        description: 'In Sai World Empire',
        coverImage: 'https://i.ibb.co/kgsC94dZ/IMG-20250507-WA0017.jpg',
        gallery: [

            'https://i.ibb.co/twDdyxGv/IMG-20250507-WA0029.jpg',
            'https://i.ibb.co/FLXtYVsw/IMG-20250507-WA0011.jpg',
            'https://i.ibb.co/23t5ZSMz/IMG-20250507-WA0012.jpg',
            'https://i.ibb.co/Vch2jGxg/IMG-20250507-WA0016.jpg',
            'https://i.ibb.co/kgsC94dZ/IMG-20250507-WA0017.jpg',
            'https://i.ibb.co/1GkDyb1r/IMG-20250507-WA0018.jpg',
            'https://i.ibb.co/v4qwrVZz/IMG-20250507-WA0019.jpg',
            'https://i.ibb.co/4RsP79hn/IMG-20250507-WA0020.jpg',
            'https://i.ibb.co/twH9hxkd/IMG-20250507-WA0021.jpg',
            'https://i.ibb.co/N6ppyZvc/IMG-20250507-WA0022.jpg',
            'https://i.ibb.co/HDmLzLV4/IMG-20250507-WA0023.jpg',
            'https://i.ibb.co/MxSBdCP0/IMG-20250507-WA0024.jpg',
            'https://i.ibb.co/nM5YTnyV/IMG-20250507-WA0025.jpg',
            'https://i.ibb.co/KpSq7HHW/IMG-20250507-WA0026.jpg',
            'https://i.ibb.co/WN0Df8J9/IMG-20250507-WA0028.jpg'
        ],
        info: {
            client: 'Unknown',
            developer: 'Unknown',
            area: '4,500 SQM',
            duration: '6 Months',
            type: 'Corporate Interior',
            completion: 'September 2023'
        }
    }
];

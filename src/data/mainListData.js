export const  mainListData = [
    {
        id: 1,
        title: "Skin Care",
        price: "777",
        type: "main", 
		desc:`Customized based on your 
		skin care needs and includes an invigorating Hungarian hand and arm massage. `
    },
    {
        id: 2,
        title: "Body",
        price: "333",
        type: "main",
		desc:`Lavender Mint full body exfoliation, 
			aromatherapy shower and lotion application.  `
    },
    {
        id: 3,
        title: "Massage",
        price: "111",
        type: "main",
		desc:`Full-body relaxation massage, consisting of 
			smooth long strokes with light to moderate pressure. `
    },
	///////////////////// subs 
    {	id: 4,
        title: "Age Corrective",
        price: "11",
        type: "sub",
        parent_id:[1] 
    },
	{	id: 5,
        title: "Mangosteen Triple Peel",
        price: "11",
        type: "sub",
        parent_id:[1] 
    },
    {	id: 6,
        title: "Rosé All Day Eye Treatment",
        price: "11",
        type: "sub",
        parent_id:[1] 
    },
	
    {	id: 7,
        title: "Antioxidant Booster",
        price: "11",
        type: "sub",
        parent_id:[2, 3] 
    },
    {	id: 8,
        title: "Hydration Booster",
        price: "11",
        type: "sub",
        parent_id:[2, 3] 
    },
    {	id: 9,
        title: "Wrinkles Out Booster",
        price: "11",
        type: "sub",
        parent_id:[2] 
    },
    {	id: 10,
        title: "HydraAromatherapy Bowl",
        price: "11",
        type: "sub",
        parent_id:[2] 
    },	
	// https://webon dev=git=hub.io/
	{	id: 11,
        title: "Warming Eye Mask",
        price: "11",
        type: "sub",
        parent_id:[3] 
    },
	{	id: 12,
        title: "Stone Crop Revitalizing Back Polish",
        price: "11",
        type: "sub",
        parent_id:[3] 
    },	

]
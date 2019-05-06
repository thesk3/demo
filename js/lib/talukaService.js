//factory 
app.factory("talukaService", [ '$filter', function($filter) {
	var service = {};
	// state list with respective country
	var statelist = [ {
		"state" : "Maharashtra",
		"countryId" : "India"
	}, {
		"state" : "Andaman and Nicobar Islands union territory",
		"countryId" : "India"
	}, {
		"state" : "Andhra Pradesh",
		"countryId" : "India"
	}, {
		"state" : "Arunachal Pradesh",
		"countryId" : "India"
	}, {
		"state" : "Assam",
		"countryId" : "India"
	}, {
		"state" : "Bihar",
		"countryId" : "India"
	}, {
		"state" : "Chandigarh",
		"countryId" : "India"
	}, {
		"state" : "Chhattisgarh",
		"countryId" : "India"
	}, {
		"state" : "Dadra and Nagar Haveli",
		"countryId" : "India"
	}, {
		"state" : "Daman and Diu",
		"countryId" : "India"
	}, {
		"state" : "Delhi",
		"countryId" : "India"
	}, {
		"state" : "Goa",
		"countryId" : "India"
	}, {
		"state" : "Gujarat",
		"countryId" : "India"
	}, {
		"state" : "Haryana",
		"countryId" : "India"
	}, {
		"state" : "Himachal Pradesh",
		"countryId" : "India"
	}, {
		"state" : "Jharkhand",
		"countryId" : "India"
	}, {
		"state" : "Jammu and Kashmir",
		"countryId" : "India"
	}, {
		"state" : "Jharkhand",
		"countryId" : "India"
	}, {
		"state" : "Karnataka",
		"countryId" : "India"
	}, {
		"state" : "Kerala",
		"countryId" : "India"
	}, {
		"state" : "Lakshadweep",
		"countryId" : "India"
	}, {
		"state" : "Madhya Pradesh",
		"countryId" : "India"
	},

	{
		"state" : "Manipur",
		"countryId" : "India"
	}, {
		"state" : "Meghalaya",
		"countryId" : "India"
	}, {
		"state" : "Mizoram",
		"countryId" : "India"
	}, {
		"state" : "Nagaland",
		"countryId" : "India"
	}, {
		"state" : "Odisha",
		"countryId" : "India"
	}, {
		"state" : "Puducherry",
		"countryId" : "India"
	}, {
		"state" : "Punjab",
		"countryId" : "India"
	}, {
		"state" : "Rajasthan",
		"countryId" : "India"
	}, {
		"state" : "Sikkim",
		"countryId" : "India"
	}, {
		"state" : "Tamil Nadu",
		"countryId" : "India"
	}, {
		"state" : "Telangana",
		"countryId" : "India"
	}, {
		"state" : "Tripura",
		"countryId" : "India"
	}, {
		"state" : "Uttar Pradesh",
		"countryId" : "India"
	}, {
		"state" : "Uttarakhand",
		"countryId" : "India"
	}, {
		"state" : "West Bengal",
		"countryId" : "India"
	}, {
		"state" : "Bedfordshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Berkshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Buckinghamshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Cambridgeshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Cheshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Cornwall",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Cumbria",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Derbyshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Devon",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Dorset",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Durham",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "East Riding",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "East Sussex",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "East Yorkshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Essex",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Gloucestershire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Greater London",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Hampshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Hertfordshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Huntingdonshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Kent",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Lancashire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Leicestershire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Lincolnshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Hertfordshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Huntingdonshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Kent",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Lancashire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Leicestershire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Lincolnshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Merseyside",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Middlesex",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Norfolk",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Northamptonshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Northumberland",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Nottinghamshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Oxfordshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Rutland",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Shropshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Somerset",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "South Yorkshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Staffordshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Suffolk",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Surrey",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Tyne and Wear",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Warwickshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Westmorland",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Wiltshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Worcestershire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "West Sussex",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "West Yorkshire",
		"countryId" : "United Kingdom(UK)"
	}, {
		"state" : "Oslo",
		"countryId" : "Norway"
	}, {
		"state" : "Hordaland",
		"countryId" : "Norway"
	}, {
		"state" : "Rogaland",
		"countryId" : "Norway"
	}, {
		"state" : "Oslo",
		"countryId" : "Norway"
	}, {
		"state" : "Sor-Trondelag",
		"countryId" : "Norway"
	}, {
		"state" : "Buskerud",
		"countryId" : "Norway"
	}, {
		"state" : "Nordland",
		"countryId" : "Norway"
	}, {
		"state" : "Vest-Agder",
		"countryId" : "Norway"
	}, {
		"state" : "Akershus",
		"countryId" : "Norway"
	}, {
		"state" : "Troms",
		"countryId" : "Norway"
	}, {
		"state" : "More og Romsdal",
		"countryId" : "Norway"
	}, {
		"state" : "Vestfold",
		"countryId" : "Norway"
	}, {
		"state" : "Oppland",
		"countryId" : "Norway"
	}, {
		"state" : "Nord-Trondelag",
		"countryId" : "Norway"
	}, {
		"state" : "Hedmark",
		"countryId" : "Norway"
	}, {
		"state" : "Ostfold",
		"countryId" : "Norway"
	}, {
		"state" : "Finnmark",
		"countryId" : "Norway"
	}, {
		"state" : "Sogn og Fjordane",
		"countryId" : "Norway"
	}, {
		"state" : "Telemark",
		"countryId" : "Norway"
	}, {
		"state" : "Aust-Agder",
		"countryId" : "Norway"
	},

	];
	var districtlist = [ {
		"district" : "Sindhudurg",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Ratnagiri",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Raigad",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Mumbai",
		"stateId" : "Maharashtra"
	}, {
		"district" : "MumbaiSuburban",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Thane",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Nashik",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Nandurbar",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Dhule",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Jalgoan",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Bhuldana",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Akola",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Washim",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Amravati",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Wardha",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Nagpur",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Bhandara",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Gondia",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Gadchiroli",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Chandrapur",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Yavatmal",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Nanded",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Hingoli",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Parbhani",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Jalna",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Aurangabad",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Beed",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Latur",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Osmanabad",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Solapur",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Ahmendnagar",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Pune",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Satara",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Sangli",
		"stateId" : "Maharashtra"
	}, {
		"district" : "Kolhapur",
		"stateId" : "Maharashtra"
	}

	];
	// countries list
	var taluka = [ {
		"taluka" : "Kankavli",
		"district" : "Sindhudurg"
	}, {
		"taluka" : "Vaibhavwadi",
		"district" : "Sindhudurg"
	}, {
		"taluka" : "Malwan",
		"district" : "Sindhudurg"
	}, {
		"taluka" : "Sawantwadi",
		"district" : "Sindhudurg"
	}, {
		"taluka" : "Vengurla",
		"district" : "Sindhudurg"
	}, {
		"taluka" : "Kudal",
		"district" : "Sindhudurg"
	}, {
		"taluka" : "Dodamarg",
		"district" : "Sindhudurg"
	}, {
		"taluka" : "Devgad",
		"district" : "Sindhudurg"
	}, {
		"taluka" : "Ratnagiri",
		"district" : "Ratnagiri"
	}, {
		"taluka" : "Sangmeshwar",
		"district" : "Ratnagiri"
	}, {
		"taluka" : "Lanja",
		"district" : "Ratnagiri"
	}, {
		"taluka" : "Rajapur",
		"district" : "Ratnagiri"
	}, {
		"taluka" : "Chiplun",
		"district" : "Ratnagiri"
	}, {
		"taluka" : "Guhagar",
		"district" : "Ratnagiri"
	}, {
		"taluka" : "Dapoli",
		"district" : "Ratnagiri"
	}, {
		"taluka" : "Mandangad",
		"district" : "Ratnagiri"
	}, {
		"taluka" : "Khed",
		"district" : "Ratnagiri"
	}, {
		"taluka" : "Pen",
		"district" : "Raigad"
	}, {
		"taluka" : "Alibag",
		"district" : "Raigad"
	}, {
		"taluka" : "Murud",
		"district" : "Raigad"
	}, {
		"taluka" : "Panvel",
		"district" : "Raigad"
	}, {
		"taluka" : "Uran",
		"district" : "Raigad"
	}, {
		"taluka" : "Karjat",
		"district" : "Raigad"
	}, {
		"taluka" : "Khalapur",
		"district" : "Raigad"
	}, {
		"taluka" : "Mangaon",
		"district" : "Raigad"
	}, {
		"taluka" : "Tala",
		"district" : "Raigad"
	}, {
		"taluka" : "Roha",
		"district" : "Raigad"
	}, {
		"taluka" : "Sudhagad",
		"district" : "Raigad"
	}, {
		"taluka" : "Mahad",
		"district" : "Raigad"
	}, {
		"taluka" : "Poladpur",
		"district" : "Raigad"
	}, {
		"taluka" : "Shrivardhan",
		"district" : "Raigad"
	}, {
		"taluka" : "Mhasla",
		"district" : "Raigad"
	}, {
		"taluka" : "MumbaiCity",
		"district" : "Mumbai"
	}, {
		"taluka" : "Kurla",
		"district" : "Mumbai Suburban"
	}, {
		"taluka" : "Andheri",
		"district" : "Mumbai Suburban"
	}, {
		"taluka" : "Borivali",
		"district" : "Mumbai Suburban"
	}, {
		"taluka" : "Thane",
		"district" : "Thane"
	}, {
		"taluka" : "Kalyan",
		"district" : "Thane"
	}, {
		"taluka" : "Murbad",
		"district" : "Thane"
	}, {
		"taluka" : "Dahanu",
		"district" : "Thane"
	}, {
		"taluka" : "Palghar",
		"district" : "Thane"
	}, {
		"taluka" : "Talasari",
		"district" : "Thane"
	}, {
		"taluka" : "Jawhar",
		"district" : "Thane"
	}, {
		"taluka" : "Mokhada",
		"district" : "Thane"
	}, {
		"taluka" : "Vada",
		"district" : "Thane"
	}, {
		"taluka" : "Vikramgad",
		"district" : "Thane"
	}, {
		"taluka" : "Vasai",
		"district" : "Thane"
	}, {
		"taluka" : "Bhiwandi",
		"district" : "Thane"
	}, {
		"taluka" : "Shahapur",
		"district" : "Thane"
	}, {
		"taluka" : "Ulhasnagar",
		"district" : "Thane"
	}, {
		"taluka" : "Ambarnath",
		"district" : "Thane"
	}, {
		"taluka" : "Nashik",
		"district" : "Nashik"
	}, {
		"taluka" : "Igatpuri",
		"district" : "Nashik"
	}, {
		"taluka" : "Dindori",
		"district" : "Nashik"
	}, {
		"taluka" : "Peint",
		"district" : "Nashik"
	}, {
		"taluka" : "Trimbakeshwar",
		"district" : "Nashik"
	}, {
		"taluka" : "Kalwan",
		"district" : "Nashik"
	}, {
		"taluka" : "Deola",
		"district" : "Nashik"
	}, {
		"taluka" : "Surgana",
		"district" : "Nashik"
	}, {
		"taluka" : "Baglan/Satana",
		"district" : "Nashik"
	}, {
		"taluka" : "Malegoan",
		"district" : "Nashik"
	}, {
		"taluka" : "Nandgoan",
		"district" : "Nashik"
	}, {
		"taluka" : "Chandwad",
		"district" : "Nashik"
	}, {
		"taluka" : "Niphad",
		"district" : "Nashik"
	}, {
		"taluka" : "Sinner",
		"district" : "Nashik"
	}, {
		"taluka" : "Yeola",
		"district" : "Nashik"
	}, {
		"taluka" : "Nandurbar",
		"district" : "Nandurbar"
	}, {
		"taluka" : "Navapur",
		"district" : "Nandurbar"
	}, {
		"taluka" : "Shahada",
		"district" : "Nandurbar"
	}, {
		"taluka" : "Talode",
		"district" : "Nandurbar"
	}, {
		"taluka" : "Akkalkuwa",
		"district" : "Nandurbar"
	}, {
		"taluka" : "Akrani",
		"district" : "Nandurbar"
	}, {
		"taluka" : "Dhule",
		"district" : "Dhule"
	}, {
		"taluka" : "Sakri",
		"district" : "Dhule"
	}, {
		"taluka" : "Sindkheda",
		"district" : "Dhule"
	}, {
		"taluka" : "Shirpur",
		"district" : "Dhule"
	}, {
		"taluka" : "Jalgoan",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Jamner",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Erandol",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Dharangoan",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Bhusawal",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Raver",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Muktainagar",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Bodwad",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Yawal",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Amalner",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Parola",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Chopda",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Pachora",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Bhadgoan",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Chalisgoan",
		"district" : "Jalgoan"
	}, {
		"taluka" : "Bhuldana",
		"district" : "Bhuldana"
	}, {
		"taluka" : "Chikhli",
		"district" : "Bhuldana"
	}, {
		"taluka" : "Deulgoan Raja",
		"district" : "Bhuldana"
	}, {
		"taluka" : "Jalgaon",
		"district" : "Bhuldana"
	}, {
		"taluka" : "Sangrampur",
		"district" : "Bhuldana"
	}, {
		"taluka" : "Malkapur",
		"district" : "Bhuldana"
	}, {
		"taluka" : "Motala",
		"district" : "Bhuldana"
	}, {
		"taluka" : "Nandura",
		"district" : "Bhuldana"
	}, {
		"taluka" : "Khamgoan",
		"district" : "Bhuldana"
	}, {
		"taluka" : "Shegaon",
		"district" : "Bhuldana"
	}, {
		"taluka" : "Mehkar",
		"district" : "Bhuldana"
	}, {
		"taluka" : "Sindkhed Raja",
		"district" : "Bhuldana"
	}, {
		"taluka" : "Lonar",
		"district" : "Bhuldana"
	},

	{
		"taluka" : "Akola",
		"district" : "Akola"
	}, {
		"taluka" : "Akot",
		"district" : "Akola"
	}, {
		"taluka" : "Telhara",
		"district" : "Akola"
	}, {
		"taluka" : "Balapur",
		"district" : "Akola"
	}, {
		"taluka" : "Patur",
		"district" : "Akola"
	}, {
		"taluka" : "Murtajapur",
		"district" : "Akola"
	}, {
		"taluka" : "Barshitakli",
		"district" : "Akola"
	},

	{
		"taluka" : "Washim",
		"district" : "Washim"
	}, {
		"taluka" : "Malegoan",
		"district" : "Washim"
	}, {
		"taluka" : "Risod",
		"district" : "Washim"
	}, {
		"taluka" : "Mangrulpir",
		"district" : "Washim"
	}, {
		"taluka" : "Karanja",
		"district" : "Washim"
	}, {
		"taluka" : "Manora",
		"district" : "Washim"
	}, {
		"taluka" : "Amravati",
		"district" : "Amravati"
	}, {
		"taluka" : "Bhatukali",
		"district" : "Amravati"
	}, {
		"taluka" : "Sangrampur",
		"district" : "Amravati"
	}, {
		"taluka" : "Nandgoan",
		"district" : "Amravati"
	}, {
		"taluka" : "Khandeshwar",
		"district" : "Amravati"
	}, {
		"taluka" : "Dharni",
		"district" : "Amravati"
	}, {
		"taluka" : "Chikhaldara",
		"district" : "Amravati"
	}, {
		"taluka" : "Achalpur",
		"district" : "Amravati"
	}, {
		"taluka" : "Chandurbazar",
		"district" : "Amravati"
	}, {
		"taluka" : "Morshi",
		"district" : "Amravati"
	}, {
		"taluka" : "Warud",
		"district" : "Amravati"
	}, {
		"taluka" : "Daryapur",
		"district" : "Amravati"
	}, {
		"taluka" : "Anajangaon",
		"district" : "Amravati"
	}, {
		"taluka" : "Chandur",
		"district" : "Amravati"
	}, {
		"taluka" : "Dhamangaon",
		"district" : "Amravati"
	}, {
		"taluka" : "Tiosa",
		"district" : "Amravati"
	}, {
		"taluka" : "Malkapur",
		"district" : "Wardha"
	}, {
		"taluka" : "Deoli",
		"district" : "Wardha"
	}, {
		"taluka" : "Seloo",
		"district" : "Wardha"
	}, {
		"taluka" : "Arvi",
		"district" : "Wardha"
	}, {
		"taluka" : "Ashti",
		"district" : "Wardha"
	}, {
		"taluka" : "Karanja",
		"district" : "Wardha"
	}, {
		"taluka" : "Hinganghat",
		"district" : "Wardha"
	}, {
		"taluka" : "Samudrapur",
		"district" : "Wardha"
	}, {
		"taluka" : "Nagpur Urban",
		"district" : "Nagpur"
	}, {
		"taluka" : "Nagpur Rural",
		"district" : "Nagpur"
	}, {
		"taluka" : "kamptee",
		"district" : " Nagpur"
	}, {
		"taluka" : "Hinga",
		"district" : "Nagpur"
	}, {
		"taluka" : "Katol",
		"district" : "Nagpur"
	}, {
		"taluka" : "Narkhed",
		"district" : "Nagpur"
	}, {
		"taluka" : "Savner",
		"district" : "Nagpur"
	}, {
		"taluka" : "Kalameshwar",
		"district" : "Nagpur"
	}, {
		"taluka" : "Ramtek",
		"district" : "Nagpur"
	}, {
		"taluka" : "Mouda",
		"district" : "Nagpur"
	}, {
		"taluka" : "Parseoni",
		"district" : "Nagpur"
	}, {
		"taluka" : "Umred",
		"district" : "Nagpur"
	}, {
		"taluka" : "Kuhi",
		"district" : "Nagpur"
	}, {
		"taluka" : "Bhiwapur",
		"district" : "Nagpur"
	}, {
		"taluka" : "Bhandara",
		"district" : "Bhandara"
	}, {
		"taluka" : "Tumsar",
		"district" : "Bhandara"
	}, {
		"taluka" : "Pauni",
		"district" : "Bhandara"
	}, {
		"taluka" : "Mohadi",
		"district" : "Bhandara"
	}, {
		"taluka" : "Sakoli",
		"district" : "Bhandara"
	}, {
		"taluka" : "Lakhni",
		"district" : "Bhandara"
	}, {
		"taluka" : "Lakhandur",
		"district" : "Bhandara"
	}, {
		"taluka" : "Gondia",
		"district" : "Gondia"
	}, {
		"taluka" : "Tirora",
		"district" : "Gondia"
	}, {
		"taluka" : "Goregaon",
		"district" : "Gondia"
	}, {
		"taluka" : "Arjuni Morgaon",
		"district" : "Gondia"
	}, {
		"taluka" : "Amgaon",
		"district" : "Gondia"
	}, {
		"taluka" : "Salekasa",
		"district" : "Gondia"
	}, {
		"taluka" : "Sadak Arjuni",
		"district" : "Gondia"
	}, {
		"taluka" : "Deori",
		"district" : "Gondia"
	}, {
		"taluka" : "Gadchiroli",
		"district" : "Gadchiroli"
	}, {
		"taluka" : "Dhanora",
		"district" : "Gadchiroli"
	}, {
		"taluka" : "Chamorshi",
		"district" : "Gadchiroli"
	}, {
		"taluka" : "Mulchera",
		"district" : "Gadchiroli"
	}, {
		"taluka" : "Desaiganj",
		"district" : "Gadchiroli"
	}, {
		"taluka" : "Armori",
		"district" : "Gadchiroli"
	}, {
		"taluka" : "Kurkheda",
		"district" : "Gadchiroli"
	}, {
		"taluka" : "Korchi",
		"district" : "Gadchiroli"
	}, {
		"taluka" : "Aheri",
		"district" : "Gadchiroli"
	}, {
		"taluka" : "Etapalli",
		"district" : "Gadchiroli"
	}, {
		"taluka" : "Bhamragad",
		"district" : "Gadchiroli"
	}, {
		"taluka" : "Sironcha",
		"district" : "Gadchiroli"
	},

	{
		"taluka" : "Chandrapur",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Saoli",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Mul",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Ballarpur",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Pombhurna",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Gondpimpri",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Warora",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Chimur",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Bhadravati",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Brahmapuri",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Nagbhid",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Sindewahi",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Rajura",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Korpana",
		"district" : "Chandrapur"
	}, {
		"taluka" : "Jivati",
		"district" : "Chandrapur"
	},

	{
		"taluka" : "Yavatmal",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Arni",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Babhulgaon",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Kalamb",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Darwha",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Digras",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Ner",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Pusad",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Umarkhed",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Mahagaon",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Kelapur",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Ralegaon",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Ghatanji",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Maregaon",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Zari Jamani",
		"district" : "Yavatmal"
	}, {
		"taluka" : "Wani",
		"district" : "Yavatmal"
	},

	{
		"taluka" : "Nanded",
		"district" : "Nanded"
	}, {
		"taluka" : "Ardhapur",
		"district" : "Nanded"
	}, {
		"taluka" : "Mudkhed",
		"district" : "Nanded"
	}, {
		"taluka" : "Bhokar",
		"district" : "Nanded"
	}, {
		"taluka" : "Umri",
		"district" : "Nanded"
	}, {
		"taluka" : "Loha",
		"district" : "Nanded"
	}, {
		"taluka" : "Kandhar",
		"district" : "Nanded"
	}, {
		"taluka" : "Kinwat",
		"district" : "Nanded"
	}, {
		"taluka" : "Himayatnagar",
		"district" : "Nanded"
	}, {
		"taluka" : "Hadgaon",
		"district" : "Nanded"
	}, {
		"taluka" : "Mahur",
		"district" : "Nanded"
	}, {
		"taluka" : "Deglur",
		"district" : "Nanded"
	}, {
		"taluka" : "Mukhed",
		"district" : "Nanded"
	}, {
		"taluka" : "Dharmabad",
		"district" : "Nanded"
	}, {
		"taluka" : "Biloli",
		"district" : "Nanded"
	}, {
		"taluka" : "Naigaon",
		"district" : "Nanded"
	}, {
		"taluka" : "Hingoli",
		"district" : "Hingoli"
	}, {
		"taluka" : "Sengaon",
		"district" : "Hingoli"
	}, {
		"taluka" : "Kalamnuri",
		"district" : "Hingoli"
	}, {
		"taluka" : "Basmath",
		"district" : "Hingoli"
	}, {
		"taluka" : "AundhaNagnath",
		"district" : "Hingoli"
	}, {
		"taluka" : "Parbhani",
		"district" : "Parbhani"
	}, {
		"taluka" : "Sonpeth",
		"district" : "Parbhani"
	}, {
		"taluka" : "Gangakhed",
		"district" : "Parbhani"
	}, {
		"taluka" : "Paalam",
		"district" : "Parbhani"
	}, {
		"taluka" : "Purna",
		"district" : "Parbhani"
	}, {
		"taluka" : "Sailu",
		"district" : "Parbhani"
	}, {
		"taluka" : "Jintur",
		"district" : "Parbhani"
	}, {
		"taluka" : "Manwath",
		"district" : "Parbhani"
	}, {
		"taluka" : "Pathri",
		"district" : "Parbhani"
	}, {
		"taluka" : "Jalna",
		"district" : "Jalna"
	}, {
		"taluka" : "Bhokardan",
		"district" : "Jalna"
	}, {
		"taluka" : "Jafrabad",
		"district" : "Jalna"
	}, {
		"taluka" : "Badnapur",
		"district" : "Jalna"
	}, {
		"taluka" : "Ambad",
		"district" : "Jalna"
	}, {
		"taluka" : "Ghansawangi",
		"district" : "Jalna"
	}, {
		"taluka" : "Partur",
		"district" : "Jalna"
	}, {
		"taluka" : "Mantha",
		"district" : "Jalna"
	}, {
		"taluka" : "Aurangabad",
		"district" : "Aurangabad"
	}, {
		"taluka" : "Kannad",
		"district" : "Aurangabad"
	}, {
		"taluka" : "Soegaon",
		"district" : "Aurangabad"
	}, {
		"taluka" : "Sillod",
		"district" : "Aurangabad"
	}, {
		"taluka" : "Phulambri",
		"district" : "Aurangabad"
	}, {
		"taluka" : "Khuldabad",
		"district" : "Aurangabad"
	}, {
		"taluka" : "Vaijapur",
		"district" : "Aurangabad"
	}, {
		"taluka" : "Gangapur",
		"district" : "Aurangabad"
	}, {
		"taluka" : "Paithan",
		"district" : "Aurangabad"
	}, {
		"taluka" : "Beed",
		"district" : "Beed"
	}, {
		"taluka" : "Ashti",
		"district" : "Beed"
	}, {
		"taluka" : "Patoda",
		"district" : "Beed"
	}, {
		"taluka" : "ShirurKasar",
		"district" : "Beed"
	}, {
		"taluka" : "Georai",
		"district" : "Beed"
	}, {
		"taluka" : "Manjalgaon",
		"district" : "Beed"
	}, {
		"taluka" : "Wadwani",
		"district" : "Beed"
	}, {
		"taluka" : "Kaij",
		"district" : "Beed"
	}, {
		"taluka" : "Dharur",
		"district" : "Beed"
	}, {
		"taluka" : "Parli",
		"district" : "Beed"
	}, {
		"taluka" : "Ambejogai",
		"district" : "Beed"
	}, {
		"taluka" : "Latur",
		"district" : "Latur"
	}, {
		"taluka" : "Renapur",
		"district" : "Latur"
	}, {
		"taluka" : "Ahmadpur",
		"district" : "Latur"
	}, {
		"taluka" : "Jalkot",
		"district" : "Latur"
	}, {
		"taluka" : "Chakur",
		"district" : "Latur"
	}, {
		"taluka" : "Shirur Anantpal",
		"district" : "Latur"
	}, {
		"taluka" : "Ausa",
		"district" : "Latur"
	}, {
		"taluka" : "Nilanga",
		"district" : "Latur"
	}, {
		"taluka" : "Deoni",
		"district" : "Latur"
	}, {
		"taluka" : "Udgir",
		"district" : "Latur"
	}, {
		"taluka" : "Osmanabad",
		"district" : "Osmanabad"
	}, {
		"taluka" : "Tuljapur",
		"district" : "Osmanabad"
	}, {
		"taluka" : "Lohara",
		"district" : "Osmanabad"
	}, {
		"taluka" : "Umarga",
		"district" : "Osmanabad"
	}, {
		"taluka" : "Bhum",
		"district" : "Osmanabad"
	}, {
		"taluka" : "Paranda",
		"district" : "Osmanabad"
	}, {
		"taluka" : "Washi",
		"district" : "Osmanabad"
	}, {
		"taluka" : "Kalamb",
		"district" : "Osmanabad"
	}, {
		"taluka" : "SolapurNorth",
		"district" : "Solapur"
	}, {
		"taluka" : "SolapurSouth",
		"district" : "Solapur"
	}, {
		"taluka" : "Akkalkot",
		"district" : "Solapur"
	}, {
		"taluka" : "Barshi",
		"district" : "Solapur"
	}, {
		"taluka" : "Madha",
		"district" : "Solapur"
	}, {
		"taluka" : "Karmala",
		"district" : "Solapur"
	}, {
		"taluka" : "Mohol",
		"district" : "Solapur"
	}, {
		"taluka" : "Pandharpur",
		"district" : "Solapur"
	}, {
		"taluka" : "Malshiras",
		"district" : "Solapur"
	}, {
		"taluka" : "Sangole",
		"district" : "Solapur"
	}, {
		"taluka" : "Mangalvedhe",
		"district" : "Solapur"
	}, {
		"taluka" : "Nagar",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Shevgaon",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Pathardi",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Parner",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Sangamner",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Kopargaon",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Akole",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Shrirampur",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Shrirampur",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Rahata",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Rahuri",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Shrigonda",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Karjat",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Jamkhed",
		"district" : "Ahmendnagar"
	}, {
		"taluka" : "Pune City",
		"district" : "Pune"
	}, {
		"taluka" : "Haveli",
		"district" : "Pune"
	}, {
		"taluka" : "Khed",
		"district" : "Pune"
	}, {
		"taluka" : "Junnar",
		"district" : "Pune"
	}, {
		"taluka" : "Ambegaon",
		"district" : "Pune"
	}, {
		"taluka" : "Maval",
		"district" : "Pune"
	}, {
		"taluka" : "Mulshi",
		"district" : "Pune"
	}, {
		"taluka" : "Shirur",
		"district" : "Pune"
	}, {
		"taluka" : "Purandhar",
		"district" : "Pune"
	}, {
		"taluka" : "Velhe",
		"district" : "Pune"
	}, {
		"taluka" : "Bhor",
		"district" : "Pune"
	}, {
		"taluka" : "Baramati",
		"district" : "Pune"
	}, {
		"taluka" : "Indapur",
		"district" : "Pune"
	}, {
		"taluka" : "Daund",
		"district" : "Pune"
	}, {
		"taluka" : "Satara",
		"district" : "Satara"
	}, {
		"taluka" : "Jaoli",
		"district" : "Satara"
	}, {
		"taluka" : "Koregaon",
		"district" : "Satara"
	}, {
		"taluka" : "Wai",
		"district" : "Satara"
	}, {
		"taluka" : "Mahabaleshwar",
		"district" : "Satara"
	}, {
		"taluka" : "Khandala",
		"district" : "Satara"
	}, {
		"taluka" : "Phaltan",
		"district" : "Satara"
	}, {
		"taluka" : "Maan",
		"district" : "Satara"
	}, {
		"taluka" : "Khatav",
		"district" : "Satara"
	}, {
		"taluka" : "Patan",
		"district" : "Satara"
	}, {
		"taluka" : "Karad",
		"district" : "Satara"
	}, {
		"taluka" : "Miraj",
		"district" : "Sangli"
	}, {
		"taluka" : "Kavathe-Mahankal",
		"district" : "Sangli"
	}, {
		"taluka" : "Tasgaon",
		"district" : "Sangli"
	}, {
		"taluka" : "Jat",
		"district" : "Sangli"
	}, {
		"taluka" : "Walwa",
		"district" : "Sangli"
	}, {
		"taluka" : "Shirala",
		"district" : "Sangli"
	}, {
		"taluka" : "Khanapur",
		"district" : "Sangli"
	}, {
		"taluka" : "Atpadi",
		"district" : "Sangli"
	}, {
		"taluka" : "Palus",
		"district" : "Sangli"
	}, {
		"taluka" : "Kadegaon",
		"district" : "Sangli"
	}, {
		"taluka" : "Karvir",
		"district" : "Kolhapur"
	}, {
		"taluka" : "Panhala",
		"district" : "Kolhapur"
	}, {
		"taluka" : "Shahuwadi",
		"district" : "Kolhapur"
	}, {
		"taluka" : "Kagal",
		"district" : "Kolhapur"
	}, {
		"taluka" : "Hatkanangale",
		"district" : "Kolhapur"
	}, {
		"taluka" : "Shirol",
		"district" : "Kolhapur"
	}, {
		"taluka" : "Radhanagari",
		"district" : "Kolhapur"
	}, {
		"taluka" : "Gaganbawada",
		"district" : "Kolhapur"
	}, {
		"taluka" : "Bhudargad",
		"district" : "Kolhapur"
	}, {
		"taluka" : "Gadhinglaj",
		"district" : "Kolhapur"
	}, {
		"taluka" : "Chandgad",
		"district" : "Kolhapur"
	}, {
		"taluka" : "Ajra",
		"district" : "Kolhapur"
	}

	];

	// get all countries
	service.getState = function() {
		return statelist;

	};
	// get all district
	service.getDistrict = function() {
		return districtlist;

	};
	// get all taluka
	service.getTaluka = function() {
		return taluka;

	};
	// get country based on code
	service.getDistrictfromState = function(code) {
		console.log("values", code);
		console.log(districtlist);
		var district = ($filter('filter')(districtlist, {
			stateId : code
		}));
		console.log(district);
		return district;
	};

	// get country based on code
	service.getTalukafromDistrict = function(code) {
		console.log("values", code);
		var talukas = ($filter('filter')(taluka, {
			district : code
		}));
		console.log(talukas);
		return talukas;
	};

	return service;

} ]);
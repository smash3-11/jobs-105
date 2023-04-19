let jobs = [
    {
        id: 1,
        company_name: "raximjon_pepsi",
        tax: 13,
        budget: 2_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 15000
            },
            {
                title: "salary",
                total: 500_000
            },
            {
                title: "rent",
                total: 200_000
            },
        ]
    },
    {
        id: 2,
        company_name: "amir_fanta_stick",
        tax: 12,
        budget: 1_800_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 20_000
            },
            {
                title: "salary",
                total: 700_000
            },
            {
                title: "rent",
                total: 100_000
            },
        ]
    },
    {
        id: 3,
        company_name: "frump_buildings",
        tax: 14,
        budget: 3_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 50_000
            },
            {
                title: "salary",
                total: 1_200_000
            },
            {
                title: "rent",
                total: 500_000
            },
        ]
    },
    {
        id: 4,
        company_name: "farrux_tube",
        tax: 12,
        budget: 10_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 4_000_000
            },
            {
                title: "rent",
                total: 300_000
            },
        ]
    },
    {
        id: 5,
        company_name: "desla",
        tax: 14,
        budget: 14_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 3_000_000
            },
            {
                title: "rent",
                total: 5_000_000
            },
        ]
    },
    {
        id: 5,
        company_name: "desla",
        tax: 14,
        budget: 14_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 3_000_000
            },
            {
                title: "rent",
                total: 5_000_000
            },
        ]
    },
    {
        id: 6,
        company_name: "nosway_u_rustama",
        tax: 10,
        budget: 100_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 10_000
            },
            {
                title: "salary",
                total: 0
            },
            {
                title: "rent",
                total: 0
            },
        ]
    },
    {
        id: 6,
        company_name: "vinovodochnaya_u_timura",
        tax: 21,
        budget: 1_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 40_000
            },
            {
                title: "salary",
                total: 20_000
            },
            {
                title: "rent",
                total: 30_000
            },
        ]
    },
    {
        id: 7,
        company_name: "sokhib_books",
        tax: 10,
        budget: 400_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 40_000
            },
            {
                title: "salary",
                total: 12_000
            },
            {
                title: "rent",
                total: 15_000
            },
        ]
    }
]

let successful = [];
let unsuccessful = [];


// let tax_total ;
for (let item of jobs) {
    let m_expenses = Math.round(item.expensesPerYear.reduce((a, b) => a + b.total, 0) / 12)
    let m_budget = item.budget / 12
    item.percent = Math.round(m_expenses / m_budget * 100)

    //вычисляем  сумму налога 
    let tax_sum = Math.round(m_budget * item.tax / 100)

    //добавляем в м.расходы
    item.expensesPerYear.push({ title: "tax", total: tax_sum  })
    m_expenses += tax_sum   
        

    // let m_tax_sum = Math.round((item.budget * item.tax) / 100 / 12);
    
    //итог
    let overall = Math.round(item.budget - m_expenses - tax_sum)

    if (overall > 0) {
        successful.push(item.company_name)
    } else {
        unsuccessful.push(item.company_name)
    }


    // let tax_total = item.budget * (item.tax / 100);
   
    // tax_total += tax_sum;
  
    let maxTaxCompany = jobs.reduce((a, b) => a.tax > b.tax ? a : b).company_name;

    console.log(`Компания ${maxTaxCompany} платит меньший налог.`);

    let minTaxCompany = jobs.reduce((a, b) => a.tax < b.tax ? a : b).company_name;

    console.log(`Компания ${minTaxCompany} платит меньший налог.`);

    
    console.log(`percent: ${item.percent}%`);

    console.log(`налог за месяц: ${tax_sum}`);
    console.log(`итог: ${overall}`);
   
    console.log(`successful: ${successful}`);
    console.log(`unsuccessful: ${unsuccessful}`);
}
  











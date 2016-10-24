import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cookbooks = [
        {
            id: 1, 
            name: 'Angular Recipes',
            recipes: [
                {
                    id: 12,
                    cookbookId: 1,
                    name: 'Chcolate Chip Cookies',
                    ingridients: [
                        {
                           name: 'Flour',
                           quantity: '2 Cups' 
                        },
                        {
                           name: 'Baking Sode',
                           quantity: '2 Tablespoons' 
                        },
                        {
                           name: 'Chocolate Chips',
                           quantity: '1 Cups' 
                        },
                        {
                           name: 'Sugar',
                           quantity: '2 Tablespoons' 
                        },
                        {
                           name: 'Butter',
                           quantity: '1 Cup' 
                        },
                        {
                           name: 'Eggs',
                           quantity: '2' 
                        },
                        {
                           name: 'Salt',
                           quantity: '1/2 Teaspoon' 
                        }
                    ]  
                },
                {
                    id: 7,
                    name: 'Raviolis',
                    cookbookId: 1,                    
                    ingridients: [
                        {
                           name: 'Cheese Filled Raviolis',
                           quantity: '1 Package' 
                        },
                        {
                           name: 'Pasta Sauce',
                           quantity: '1 Can' 
                        },
                        {
                           name: 'Cooking Spray',
                           quantity: '1 Can' 
                        },
                        {
                           name: 'Mozarellla Cheese (Shredded)',
                           quantity: '1 Cup' 
                        },
                        {
                           name: 'Fresh Basil',
                           quantity: '1 Cup' 
                        }
                    ]  
                }
            ]
        },
        {
            id: 2,
            name: "Mom's Recipes",
            recipes: [
                {
                    id: 73,
                    name: 'Alfredo',
                    cookbookId: 2,
                    ingridients: [
                        {
                           name: 'Heavy Cream',
                           quantity: '1 Cup' 
                        },
                        {
                           name: 'Parmesan Cheese',
                           quantity: '1/2 Cup' 
                        },
                        {
                           name: 'Parsley',
                           quantity: '1 Tablespoon' 
                        },
                        {
                           name: 'Shallots',
                           quantity: '1/2 Cup' 
                        },
                        {
                           name: 'Garlic',
                           quantity: '1 Cup' 
                        },
                        {
                            name: 'Penne Pasta',
                            quantity: '1 Box'
                        }
                    ]      
                }
            ]
        }
    ];
    return { cookbooks };
  }
}
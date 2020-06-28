import * as express from 'express'

const app = express()

app.get('/', async (req, res) => {
    abstract class Creator
    {
        public abstract factoryMethod(): Product;

        public baseCreator():string {
            const productCreated  = this.factoryMethod()
            return `Esse é o produto criado pelo: ${JSON.stringify(productCreated.createObject())}`
        }

        public baseAdd(): string {
            const productCreated  = this.factoryMethod()
            return `Produto inserido por: ${productCreated.add(productCreated.createObject())}`
        }
    }

    interface Product {
        createObject(): object
        add(data: object): string
    }

    class concrectCreator1 extends Creator
    {
        public factoryMethod():Product {
            return new ConcrectProduct1()
        }
    }

    class ConcrectProduct1 implements Product 
    {
        public createObject(): object {
            return {
                id: 1,
                name: 'Vitor'
            }; 
        }

        public add(data: object): string {
            return 'Adicionando no BD - MONGO'
        }
    }

    class concrectCreator2 extends Creator
    {
        public factoryMethod():Product {
            return new ConcrectProduct2()
        }
    }

    class ConcrectProduct2 implements Product 
    {
        public createObject(): object {
            return {
                id: 2,
                name: 'Rampazzo'
            }; 
        }

        public add(data: object): string {
            return 'Adicionando no BD - SQL'
        }
    }

    function createProduct(creator: Creator) {
        console.log('Criando Produto');
        console.log(creator.baseCreator());
        console.log(creator.baseAdd()); 
    }
    
    createProduct(new concrectCreator1())
    createProduct(new concrectCreator2())
    return res.json({statusCode: 200})
})
app.listen(3333)
import {Categories} from './categories';

export class Product{
	constructor(
		public id: number,
        public name: string,
	    public description: string,
		public price: number,
		public category: Categories,
		public isAvailable: boolean
	){}
}

//create default schemas for product - create schema and add ability let users add content to the database
export default{
    name: 'product',
    title: 'Product',
    type: 'document',
    //field is object base
    fields: [
        //image field
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            //array of type = images
            of:[{type: 'image'}],
            options:{
                //image can be cropped?
                hotspot: true,
            }
        },

        //Product Name field - string
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },

        //slug field
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                //a generate button - automatically generate unique slug based on product name
                source: 'name',
                maxlEngth: 90,
            }
        },

        //price field
        {
            name: 'price',
            title: 'Price',
            type: 'number',

        },

        //detail field
        {
            name: 'detail',
            title: 'Detail',
            type: 'string',
        }
    ]

}
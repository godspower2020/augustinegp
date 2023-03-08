export default{
    name:'techTools',
    title:'Tech Tools',
    type: 'document',
    fields:[
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'color',
            title:'Color',
            type:'string'
        },
    ]
}


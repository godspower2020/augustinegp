export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[
                { 
                    type:'workExperience'
                }
            ]
        }, 
        {
            name:'startYear',
            title:'Start Year',
            type:'string'
        },
        {
            name:'startYearWorks',
            title:'Start Year Works',
            type:'array',
            of:[
                { 
                    type:'startYearWorkExperience'
                }
            ]
        }, 
        {
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [
                {
                name:'point',
                title:'Point',
                type:'string'
                }
            ]
          }
    ]
}
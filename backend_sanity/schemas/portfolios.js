export default {
    name: 'portfolios',
    title: 'Portfolios',
    type: 'document',
    fields: [
      {
        name: 'isAvailable',
        title: 'IsAvailable',
        type: 'boolean'
      },
      {
        name: 'isMyPortfolio',
        title: 'IsMyPortfolio',
        type: 'boolean'
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name:'company',
        title:'Company',
        type:'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name:'companyNeeds',
        title:'Company Needs',
        type:'string'
      },
      {
        name:'problemsFaced',
        title:'Problems Faced',
        type:'string'
      },
      {
        name:'solutionOne',
        title:'Solution One',
        type:'string'
      },
      {
        name:'solutionTwo',
        title:'Solution Two',
        type:'string'
      },
      {
        name:'conclusion',
        title:'Conclusion',
        type:'string'
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'subProjectLink',
        title: 'Sub Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'heroImg',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'array',
        of: [
          { type: 'image', },
        ],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title', 
          maxLength: 90,
        }
      },
      {
        name: 'tags',
        title: 'Tags',
        type:'array',
        of: [
         {
           name:'tag',
           title:'Tag', 
           type:'string'
         }
       ]
      },
      {
        name: 'works',
        title: 'Works',
        type:'array',
        of: [
         {
           name:'work',
           title:'Work',
           type:'string'
         }
       ]
      },
      {
        name:'appleColor',
        title:'apple Color',
        type:'string'
      }
    ],
    initialValue: {
      isAvailable: true
    },
    initialValue: {
      isMyPortfolio: false
    }
  };
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import abouts from './abouts'
import contact from './contact'
import experiences from './experiences'
import majors from './majors'
import heroItems from './heroItems'
import heroTitles from './heroTitles'
import otherTechStacks from './otherTechStacks'
import portfolios from './portfolios'
import skills from './skills'
import projects from './projects'
import techStacks from './techStacks'
import devTools from './devTools'
import technicalSkills from './technicalSkills'
import testimonials from './testimonials'
import workExperience from './workExperience'
import startYearWorkExperience from './startYearWorkExperience'
// import portableText from './portableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    abouts,
    contact,
    experiences,
    majors,
    heroItems,
    heroTitles,
    otherTechStacks,
    portfolios,
    skills,
    projects,
    techStacks,
    devTools,
    technicalSkills,
    testimonials,
    workExperience,
    startYearWorkExperience,
    // portableText
  ]),
})

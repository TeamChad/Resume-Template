import * as types from '../constants/'

export const initialState = {
  appReady: false,
  contact: {
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    home: ''
  },
  job: '',
  photo: '',
  summary: '', // accepts HTML
  social: {
    linkedin: ''
  },
  roles: [ // component
    {
      title: 'Role 1',
      company: '',
      date: '',
      summary: '', // accepts HTML
      showSummary: true, // Set to false for short version of role
      duties: [  // lists duties in ';' separated string
        'duty 1',
        'duty 2',
        'duty 3 ...'
      ]
    },
    {
      title: 'Role 2',
      company: '',
      date: '',
      summary: '', // accepts HTML
      showSummary: true, // Set to false for short version of role
      duties: [  // lists roles in ';' separated string
        'duty 1',
        'duty 2',
        'duty 3 ...'
      ]
    }
  ],
  skills: [
    {
      name: 'Skill 1',
      rating: 9 // 0 - 10
    },
    {
      name: 'Skill 2',
      rating: 4 // 0 - 10
    },
    {
      name: 'Skill 3',
      rating: 7 // 0 - 10
    }
  ],
  interests: [ // Prints as '<li>' in an '<ul>'
    'interest 1',
    'interest 2',
    'interest 3 ... '
  ],
  awards: [ // component
    {
      name: 'Award 1',
      date: '2017'
    },
    {
      name: 'Award 2',
      date: '2016'
    }
  ],
  projects: [ // component
    {
      name: 'Project 1',
      client: '',
      summary: '', // accepts HTML
      duties: [ // lists duties in ';' separated string
        'duty 1',
        'duty 2',
        'duty 3 ...'
      ],
      technologies: [ // lists technologies in ';' separated string
        'tech 1',
        'tech 2',
        'tech 3 ...'
      ]
    },
    {
      name: 'Project 2',
      client: '',
      summary: '', // accepts HTML
      duties: [ // lists duties in ';' separated string
        'duty 1',
        'duty 2',
        'duty 3 ...'
      ],
      technologies: [ // lists technologies in ';' separated string
        'tech 1',
        'tech 2',
        'tech 3 ...'
      ]
    }
  ],
  referees: []
}

export default function resume(state = initialState, action) {
  switch(action.type) {
    case types.APP_READY:
      return {...state, appReady: true }
    default:
      return state;
  }
}
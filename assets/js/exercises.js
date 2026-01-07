const exercises = [
  {
    id: 'cat-cow-stretch',
    name: 'Cat-Cow Stretch',
    category: 'back-pain',
    categoryLabel: 'Back Pain',
    duration: 60,
    instructions: [
      'Start on your hands and knees in a tabletop position.',
      'Inhale, drop your belly towards the floor, lift your chin and chest (Cow).',
      'Exhale, round your spine towards the ceiling, tuck your chin (Cat).',
      'Repeat the movement slowly for the duration.',
      'Focus on the movement of your spine with each breath.'
    ],
    image: 'https://placehold.co/600x400?text=Cat-Cow+Stretch'
  },
  {
    id: 'childs-pose',
    name: "Child's Pose",
    category: 'back-pain',
    categoryLabel: 'Back Pain',
    duration: 45,
    instructions: [
      'Kneel on the floor with toes together and knees hip-width apart.',
      'Lower your torso between your knees.',
      'Extend your arms in front of you with palms facing down.',
      'Rest your forehead on the floor.',
      'Hold the position and breathe deeply.'
    ],
    image: 'https://placehold.co/600x400?text=Childs+Pose'
  },
  {
    id: 'knee-extension',
    name: 'Seated Knee Extension',
    category: 'knee-pain',
    categoryLabel: 'Knee Pain',
    duration: 30,
    instructions: [
      'Sit on a chair with your feet flat on the floor.',
      'Slowly extend one leg until it is straight.',
      'Hold for 3-5 seconds.',
      'Slowly lower your leg back down.',
      'Repeat with the other leg.'
    ],
    image: 'https://placehold.co/600x400?text=Knee+Extension'
  },
  {
    id: 'wall-slide',
    name: 'Wall Slide',
    category: 'knee-pain',
    categoryLabel: 'Knee Pain',
    duration: 45,
    instructions: [
      'Stand with your back against a wall.',
      'Slowly slide down until your knees are at about 45 degrees.',
      'Hold the position for a few seconds.',
      'Slide back up to standing position.',
      'Keep your feet shoulder-width apart throughout.'
    ],
    image: 'https://placehold.co/600x400?text=Wall+Slide'
  },
  {
    id: 'hamstring-stretch',
    name: 'Standing Hamstring Stretch',
    category: 'stretching',
    categoryLabel: 'Stretching',
    duration: 30,
    instructions: [
      'Stand tall with one foot slightly in front.',
      'Bend your back knee while keeping your front leg straight.',
      'Hinge at your hips and lean forward slightly.',
      'Feel the stretch in the back of your front leg.',
      'Hold and then switch legs.'
    ],
    image: 'https://placehold.co/600x400?text=Hamstring+Stretch'
  },
  {
    id: 'shoulder-stretch',
    name: 'Cross-Body Shoulder Stretch',
    category: 'stretching',
    categoryLabel: 'Stretching',
    duration: 30,
    instructions: [
      'Bring one arm across your body at chest height.',
      'Use your other hand to gently pull the arm closer.',
      'Keep your shoulders relaxed.',
      'Hold the stretch and breathe.',
      'Switch arms and repeat.'
    ],
    image: 'https://placehold.co/600x400?text=Shoulder+Stretch'
  },
  {
    id: 'wall-pushup',
    name: 'Wall Push-Up',
    category: 'muscle-strength',
    categoryLabel: 'Muscle Strength',
    duration: 45,
    instructions: [
      'Stand facing a wall at arm\'s length.',
      'Place your palms flat on the wall at shoulder height.',
      'Slowly bend your elbows and lean towards the wall.',
      'Push back to the starting position.',
      'Keep your body in a straight line throughout.'
    ],
    image: 'https://placehold.co/600x400?text=Wall+Pushup'
  },
  {
    id: 'leg-raise',
    name: 'Lying Leg Raise',
    category: 'muscle-strength',
    categoryLabel: 'Muscle Strength',
    duration: 40,
    instructions: [
      'Lie flat on your back with legs straight.',
      'Place your hands under your lower back for support.',
      'Slowly raise one leg about 6-12 inches off the ground.',
      'Hold for 3-5 seconds.',
      'Lower slowly and repeat with the other leg.'
    ],
    image: 'https://placehold.co/600x400?text=Leg+Raise'
  }
];

const categories = [
  { id: 'all', label: 'All Exercises' },
  { id: 'back-pain', label: 'Back Pain' },
  { id: 'knee-pain', label: 'Knee Pain' },
  { id: 'stretching', label: 'Stretching' },
  { id: 'muscle-strength', label: 'Muscle Strength' }
];

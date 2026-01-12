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
    image: 'images/exercises/cat-cow.webp',
    physio: {
      benefits: "Improves spinal flexibility, encourages coordination between thoracic and lumbar segments, and promotes healthy postural alignment. Studies suggest that dynamic spinal mobilizations like Cat-Cow can reduce stiffness and relieve discomfort in individuals with mild to moderate back pain.",
      recovery: "Targets the spinal erectors, abdominals, and shoulder stabilizers, enhancing joint mobility and muscular control. Regular practice can help rehabilitate postural imbalances and facilitate safe return to daily activities.",
      safety: [
        "Move within a pain-free range, never forcing the spine.",
        "Keep movements slow and controlled to prevent muscle strain.",
        "Maintain steady breathing throughout the exercise.",
        "Stop immediately if sharp pain occurs and consult a physiotherapist."
      ],
      image: 'images/muscle/back-muscle.webp',
    }
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
    image: 'images/exercises/child-pose.jpg',
    physio: {
      benefits: "Stretches the spine and shoulders gently, promoting relaxation of paraspinal muscles. Physiotherapy studies indicate that Child's Pose can reduce lumbar tension and improve thoracic spine mobility.",
      recovery: "Targets lower back muscles and hip flexors, helping restore flexibility and relieve tension. Especially beneficial for postural correction and safe elongation of spinal tissues.",
      safety: [
        "Avoid pushing the knees or hips beyond comfort limits.",
        "Keep breathing steady and relaxed.",
        "Use cushions under knees if necessary for support.",
        "Consult a physiotherapist before using if recovering from spinal injury."
      ],
      image: 'images/muscle/back-muscle.webp',
    }
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
    image: 'images/exercises/seated-knee.png',
    physio: {
      benefits: "Strengthens quadriceps muscles critical for knee stability. Research shows that controlled knee extensions improve joint support and reduce strain on the patellofemoral joint.",
      recovery: "Targets quadriceps and surrounding stabilizers, helping restore knee extension range and functional strength after injury or surgery.",
      safety: [
        "Do not lock the knee at full extension forcefully.",
        "Keep movements slow and controlled to avoid irritation.",
        "Stop if you experience sharp pain or swelling.",
        "Recommended for early to mid-phase rehabilitation only."
      ],
      image: 'images/muscle/quadriceps.webp',
    }
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
    image: 'images/exercises/wall-slide.jpg',
    physio: {
      benefits: "Strengthens quadriceps and gluteal muscles while promoting knee joint stability. Studies indicate that wall slides improve functional lower limb strength and reduce anterior knee pain.",
      recovery: "Targets quadriceps, glutes, and stabilizing muscles around the knee, supporting rehabilitation after mild knee injuries or post-surgery strengthening programs.",
      safety: [
        "Do not slide beyond a 45-degree knee bend to avoid stress on ligaments.",
        "Keep back and heels against the wall for proper form.",
        "Avoid sudden movements or bouncing.",
        "Consult a physiotherapist for progression to deeper bends."
      ],
      image: 'images/muscle/quadriceps.webp',
    }
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
    image: 'images/exercises/standing-hamstring.webp',
    physio: {
      benefits: "Lengthens hamstring muscles, improving flexibility and reducing posterior chain tightness. Research shows consistent hamstring stretching reduces risk of lower back and leg injuries.",
      recovery: "Targets hamstrings and glutes, enhancing functional mobility for daily activities and athletic movements.",
      safety: [
        "Keep knee slightly bent if necessary to avoid over-stretching.",
        "Do not bounce; perform slow, sustained stretches.",
        "Avoid overstretching if recovering from hamstring injury.",
        "Consult a physiotherapist for modifications if needed."
      ],
      image: 'images/muscle/hamstring.jpg',
    }
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
    image: 'images/exercises/cross-body.webp',
    physio: {
      benefits: "Improves flexibility and range of motion in the shoulder joint. Clinical studies suggest cross-body stretching enhances shoulder mobility and reduces stiffness in the deltoid and rotator cuff muscles.",
      recovery: "Targets deltoid, rotator cuff, and scapular stabilizers, supporting safe movement patterns and injury prevention.",
      safety: [
        "Avoid forceful pulling or jerky motions.",
        "Keep shoulders down and relaxed.",
        "Stop if pain or numbness occurs.",
        "Consult a physiotherapist if recovering from shoulder injury."
      ],
      image: 'images/muscle/deltoid.png',
    }
  },
  {
    id: 'wall-pushup',
    name: 'Wall Push-Up',
    category: 'muscle-strength',
    categoryLabel: 'Muscle Strength',
    duration: 45,
    instructions: [
      "Stand facing a wall at arm's length.",
      'Place your palms flat on the wall at shoulder height.',
      'Slowly bend your elbows and lean towards the wall.',
      'Push back to the starting position.',
      'Keep your body in a straight line throughout.'
    ],
    image: 'images/exercises/wall-pushup.jpg',
    physio: {
      benefits: "Strengthens pectoral and shoulder muscles with minimal joint strain. Studies show wall push-ups are effective for rehabilitation and progressive upper-body strength training.",
      recovery: "Targets chest, shoulders, and triceps while supporting scapular stabilizers for safe functional strength development.",
      safety: [
        "Keep body straight; avoid sagging hips.",
        "Move slowly and avoid jerking motions.",
        "Stop if shoulder pain occurs.",
        "Recommended as a low-intensity rehab exercise."
      ],
      image: 'images/muscle/chest.webp',
    }
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
    image: 'images/exercises/lying-leg-raise.jpg',
    physio: {
      benefits: "Strengthens lower abdominal and hip flexor muscles. Research suggests controlled leg raises improve core stability and reduce risk of lower back injury.",
      recovery: "Targets lower abs and hip flexors to enhance pelvic control and functional mobility.",
      safety: [
        "Do not arch your lower back excessively.",
        "Raise legs slowly to avoid hip strain.",
        "Stop if lower back discomfort occurs.",
        "Consult a physiotherapist for rehab modifications."
      ],
      image: 'images/muscle/hip_flexor.jpg',
    }
  }
];
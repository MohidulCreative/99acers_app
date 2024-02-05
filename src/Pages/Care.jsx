
const Care = () => {
    const qaPairs = [
        {
          question: 'What is React?',
          answer: 'React is a JavaScript library for building user interfaces.',
        },
        {
          question: 'How to install Tailwind CSS?',
          answer: 'You can install Tailwind CSS using npm or yarn. See the documentation for details.',
        },
        {
          question: 'Is React a framework or a library?',
          answer: 'React is a library for building user interfaces. It is often used in conjunction with other libraries and frameworks.',
        },
        {
          question: 'What is JSX?',
          answer: 'JSX is a syntax extension for JavaScript, recommended to use with React, that looks similar to XML or HTML.',
        },
        // Add more Q&A pairs as needed
      ];
    
      return (
        <div className="container mx-auto mt-8 p-4 sm:p-8 pb-16">
          <h1 className="text-4xl font-bold mb-4 text-center">Q&A Page</h1>
          <div className="grid gap-4">
            {qaPairs.map((qa, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-black text-xl font-semibold mb-2">{`Q: ${qa.question}`}</h2>
                <p className="text-gray-700">{`A: ${qa.answer}`}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    

export default Care;

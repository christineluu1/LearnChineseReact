// grammarCourse.js

import React from 'react';
import './Course2.css';

const grammarRules = {
  rule1: {
    title: "Subject + Verb + Object",
    description: "This sentence structure consists of a subject, a verb, and an object. The subject performs the action expressed by the verb on the object.",
    examples: [
      { sentence: "我吃饭。", translation: "I eat food." },
      { sentence: "他看电影。", translation: "He watches movies." }
    ]
  },
  rule2: {
    title: "Subject + 不/没 + Verb",
    description: "This sentence structure is used to express negation. The negation word 不 is used for present tense and the negation word 没 is used for past tense.",
    examples: [
      { sentence: "我不吃饭。", translation: "I don't eat food." },
      { sentence: "他没看电影。", translation: "He didn't watch movies." }
    ]
  },
  rule3: {
    title: "Subject + Time + Verb",
    description: "This sentence structure is used to indicate when an action takes place.",
    examples: [
      { sentence: "我昨天吃饭。", translation: "I ate food yesterday." },
      { sentence: "他每天看电影。", translation: "He watches movies every day." }
    ]
  }
};

const Course2 = () => {
  return (
    <div className="grammar-course-container">
      <h1 className="grammar-course-title">Grammar Course: Verb Structure</h1>
      <div className="grammar-course-lesson">
        <h2 className="grammar-course-lesson-title">Lesson 1: Verb Structure</h2>
        <p className="grammar-course-lesson-text">
          In Chinese, a basic sentence structure consists of a verb. The verb expresses an action or state
          and is an essential part of a sentence. Let's learn about different types of verbs and how to
          structure a sentence using them.
        </p>
        <div className="grammar-course-examples">
          <p className="grammar-course-example">
            Verb + Object:
            <span className="grammar-course-chinese-word"> 吃 + 饭</span>
          </p>
          <p className="grammar-course-translation">
            Example: 我吃饭。Translation: I eat food.
          </p>
          <p className="grammar-course-example">
            Verb + Adverb:
            <span className="grammar-course-chinese-word"> 跑 + 快</span>
          </p>
          <p className="grammar-course-translation">
            Example: 他跑快。Translation: He runs fast.
          </p>
        </div>
      </div>
      <h1 className="grammar-course-title">Chinese Sentence Structures</h1>
      {Object.keys(grammarRules).map((rule, index) => (
        <div className="grammar-course-lesson" key={index}>
          <h2 className="grammar-course-lesson-title">{grammarRules[rule].title}</h2>
          <p className="grammar-course-lesson-text">{grammarRules[rule].description}</p>
          <div className="grammar-course-examples">
            {grammarRules[rule].examples.map((example, index) => (
              <div className="grammar-course-example" key={index}>
                <p className="grammar-course-chinese-word">{example.sentence}</p>
                <p className="grammar-course-translation">{example.translation}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course2;

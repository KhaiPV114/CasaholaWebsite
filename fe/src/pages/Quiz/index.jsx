import React, { useState } from 'react';
import { Radio, Button, Progress } from 'antd';
import {
  StyledQuizContainer,
  QuizHeader,
  QuestionCard,
  StyledButton,
  StylePagButton,
  RadioContainer,
  ButtonContainer
} from './styled';



const questionsData = [
  {
    id: 1,
    text: "Tôi luôn cố gắng làm mọi thứ một cách hoàn hảo nhất có thể."
  },
  {
    id: 2,
    text: "Tôi dễ dàng nhập từ lỗi của người khác và muốn giúp họ sửa chữa."
  },
  {
    id: 3,
    text: "Tôi tin rằng những nguyên tắc và kỷ luật cần được tuân thủ."
  },
  {
    id: 4,
    text: "Tôi tin rằng những nguyên tắc và kỷ luật cần được tuân thủ."
  },
  {
    id: 5,
    text: "Tôi tin rằng những nguyên tắc và kỷ luật cần được tuân thủ."
  },
  {
    id: 6,
    text: "Tôi tin rằng những nguyên tắc và kỷ luật cần được tuân thủ."
  },
  {
    id: 7,
    text: "Tôi tin rằng những nguyên tắc và kỷ luật cần được tuân thủ."
  },
  {
    id: 8,
    text: "Tôi tin rằng những nguyên tắc và kỷ luật cần được tuân thủ."
  }
];

const radioOptions = [
  { value: 1, label: "Hoàn toàn không đúng", scale: 4 },
  { value: 2, label: "Hiếm khi", scale: 3 },
  { value: 3, label: "Lúc này lúc kia", scale: 2 },
  { value: 4, label: "Thường xuyên", scale: 3 },
  { value: 5, label: "Hoàn toàn đúng", scale: 4 }
];

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const questionsPerPage = 5;
  const totalQuestions = questionsData.length;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = Math.min(startIndex + questionsPerPage, totalQuestions);
  const currentQuestions = questionsData.slice(startIndex, endIndex);

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const progress = (Object.keys(answers).length / totalQuestions) * 100;

  return (
    <StyledQuizContainer>
      <QuizHeader>
        <h1 style={{ fontSize: 30, fontFamily: 'Anton', fontWeight: '800', transform: 'scaleY(1.3)', marginTop: 50 }}>TRẮC NGHIỆM ENNEAGRAM MIỄN PHÍ</h1>
        <p>
          Chào mừng bạn đến với bài kiểm tra Enneagram miễn phí của CasaHola! Enneagram không chỉ là một hệ thống
          tính cách - nó là một công cụ mạnh mẽ để hiểu rõ những động lực cốt lõi thúc đẩy bạn. Hãy dành thời gian,
          trả lời một cách chân thành, và để hành trình này dẫn dắt bạn đến một sự hiểu biết sâu sắc hơn về con người bạn
          và cách bạn liên hệ với thế giới xung quanh.
        </p>
      </QuizHeader>

      <Progress
        percent={progress.toFixed(2)}
        status="active"
        style={{ margin: '0 auto 20px', width: '80%', display: 'flex', textAlign: 'center', color: 'white' }}
      />

      {currentQuestions.map((question) => (
        <QuestionCard key={question.id}>
          <div style={{ fontSize: "18px", display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', fontWeight: "700",marginTop:10,marginBottom:60 }}>{question.text}</div>
          <RadioContainer>
            <Radio.Group
              onChange={(e) => handleAnswer(question.id, e.target.value)}
              value={answers[question.id]}
            >
              {radioOptions.map((option) => (
                <div key={option.value} className="radio-item">
                  <Radio value={option.value} />
                  <span className="radio-label" style={{marginTop:50}} >{option.label}</span>
                </div>
              ))}
            </Radio.Group>
          </RadioContainer>
        </QuestionCard>
      ))}

      <div style={{ maxWidth: 800, margin: '20px auto', display: 'flex', justifyContent: 'space-between' }}>
        <StylePagButton
          type="primary"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Trang trước
        </StylePagButton>
        <span style={{ color: 'white', fontSize: 15 }}>
          Trang {currentPage}/{totalPages}
        </span>
        <StylePagButton
          type="primary"
          style={{ backgroundColor: '#f0f0f0', }}
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Trang tiếp
        </StylePagButton>
      </div>
      <ButtonContainer>
        <StyledButton onClick={() => window.location.reload()}>
          LÀM LẠI TRẮC NGHIỆM
        </StyledButton>
        <StyledButton
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          TIẾP TỤC
        </StyledButton>
      </ButtonContainer>
    </StyledQuizContainer>
  );
};

export default Quiz;
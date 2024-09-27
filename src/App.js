import logo from "./logo.svg";
import "./App.css";
import YouTubeForm from "./components/YouTubeForm";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import CourseEnrollment from "./components/CourseEnrollment";
import { ThemeProvider, theme } from "@chakra-ui/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <YouTubeForm/> */}
        {/* <FormikContainer /> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}
        <CourseEnrollment />
      </div>
    </ThemeProvider>
  );
}

export default App;

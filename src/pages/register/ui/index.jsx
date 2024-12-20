import { Container } from "../../../shared/ui"
import { Form } from '../../../widgets/form'
import { RegisterForm } from '../../../features/auth'

export const Register = () => {
  return (
    <Container cl={"auth-container"}>
      <Form title="Регистрация">
        <RegisterForm />
      </Form>
    </Container>
  )
}

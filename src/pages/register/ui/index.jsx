import { Container } from "../../../shared/ui"
import { Form } from '../../../widgets/form'
import { RegisterForm } from '../../../features/auth'

export const Register = () => {
  return (
    <Container>
      <Form title="Регистрация">
        <RegisterForm />
      </Form>
    </Container>
  )
}

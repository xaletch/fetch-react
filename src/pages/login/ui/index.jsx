import { Container } from "../../../shared/ui/"
import { Form } from '../../../widgets/form'
import { LoginForm } from '../../../features/auth'

export const Login = () => {
  return (
    <Container>
      <Form title={'Войти'}>
        <LoginForm />
      </Form>
    </Container>
  )
}

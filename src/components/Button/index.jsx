import { Container } from './styles';

export function Button(props) {
    return (
        <Container {...props} background={props.background} >
           {props.children}
        </Container>
    )
}
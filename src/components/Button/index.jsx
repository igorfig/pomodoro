import { Container } from './styles';

export function Button(props, ref) {
    return (
        <Container {...props} background={props.background} >
           {props.children}
        </Container>
    )
}
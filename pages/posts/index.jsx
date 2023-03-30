import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Post from "../../components/Post/Post.";

const MyComponent = ({posts}) => {

    return (
        <StyledPosts>
            <Container>
                <Row>
                    {
                        posts.map((post) => <Post key={post.id} post={post}/>)
                    }
                </Row>
            </Container>

        </StyledPosts>
    );
};

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data)
    return {
        props: {
            posts: data,
        }
    }
}

const StyledPosts = styled.section`

`;

export default MyComponent;

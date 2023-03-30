import React from 'react';
import styled from "styled-components";
import { useRouter } from 'next/router';

const MyComponent = ({ post }) => {
    return (
        <StyledComponent>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </StyledComponent>
    );
};

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data = await res.json();

    return {
        props: {
            post: data,
        },
    };
};

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const paths = posts?.map((post) => {
        return {
            params : {
                postId: `${post.id}`,
            }
        };
    });

    return {
        paths,
        fallback: false,
    };
};

const StyledComponent = styled.section``;

export default MyComponent;

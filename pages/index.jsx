import {useEffect} from "react";
import {useSelector} from "react-redux";
import {ApiServices} from "./api/network/ApiServices";
import {fetchHome} from "./api/redux/home";
import {wrapper} from "./api/store";
import {NextSeo} from "next-seo";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button";
import Post from "../components/Post/Post.";
import styled from "styled-components";


const Home = () => {
    const getPost = useSelector((state) => state.homeReducer);

    useEffect(() => {
        // let param = {
        //     [ApiParamKey.type]: 'type',
        //     [ApiParamKey.location]: 'location'
        // }
        // let headers = {
        //     auth: '2JSU0A013FASDFI'
        // }
        // dispatch(fetchPosts([api_services, param, headers]))
    }, []);

    return (
        <>
            <NextSeo
                title={`IMPIT`}
                description={'store in the world'}
            />
            <Banner/>
            <StyledHome>
                <Button borderColor={'#000'} src={'/posts'} color={'#fff'} background={'#000'} text={'See Posts'} />
            </StyledHome>
        </>
    );
};

const StyledHome = styled.div`
  position: absolute;
  top: 90%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


Home.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    let api_services = ApiServices.PHOTOS;
    await store.dispatch(fetchHome([api_services]));
});

export default Home;

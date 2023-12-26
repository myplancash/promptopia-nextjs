import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='purple_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Revolutionize your creative journey with Promptopia—an avant-garde, open-source AI prompting tool designed for the contemporary world.
    </p>

    <Feed />
  </section>
);

export default Home;

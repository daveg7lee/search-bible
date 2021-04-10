import Loader from 'react-loader-spinner';

const Loading = () => (
  <div className="w-screen h-screen allCenter bg-bgColor dark:bg-darkBgColor">
    <Loader type="Oval" color="#969696" height={30} width={30} />
  </div>
);

export default Loading;

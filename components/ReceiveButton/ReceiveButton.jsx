import { useRouter } from "next/router";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { Button } from "antd";
import { abi, contractAddress } from "../../constants/index";
import useAppContext from "../../context/Context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function ReceiveButton() {
  const router = useRouter();
  const { account, isWeb3Enabled } = useMoralis();
  const { tokenAmount, setTokenAmount, answers } = useAppContext();
  const MySwal = withReactContent(Swal);

  const { runContractFunction: balanceOf } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress.goerli,
    functionName: "balanceOf",
    params: {
      account: account,
    },
    account: account,
  });

  const { runContractFunction: submit } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress.goerli,
    functionName: "submit",
    params: {
      surveyId: 123,
      answersIds: answers,
    },
  });

  const handleClick = async () => {
    if (account && isWeb3Enabled) {
      await submit();
      const tokenAmountNew = await balanceOf();
      const quizTokenAmount = parseInt(tokenAmountNew._hex);
      setTokenAmount(tokenAmount + Math.ceil(quizTokenAmount / 1000000000000000000));
      showAlert(Math.ceil(quizTokenAmount / 1000000000000000000));
      router.push("/");
    } else {
      router.push("/");
    }
  };

  const showAlert = (amount) => {
    MySwal.fire({
      title: "Congratulations!",
      text: `Thank you for participating in this survey. Here you have ${amount} $QUIZ`,
    });
  };

  return (
    <>
      <Button className="button" onClick={handleClick}>
        Claim tokens!
      </Button>
    </>
  );
}

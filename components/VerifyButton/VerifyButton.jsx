import { Button } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import styles from "./VerifyButton.module.css";

export default function VerifyButton() {
  const [error, setError] = useState("");
  const [buttonText, setButtonText] = useState("Lets go!");
  const router = useRouter();
  const { account, chainId } = useMoralis();

  const SwitchChain = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x5" }],
      });
    } catch (error) {
      setError("Cannot switch to the network");
    }
  };

  const VerifyChain = async () => {
    if (chainId === "0x5") {
      router.push("/survey");
    } else {
      setError("You're not connected to Goerli network");
      setButtonText("Verify network");
    }
  };

  return (
    <>
      {error ? <p className={styles.error}>{error}</p> : null}
      <Button className={styles.button} onClick={VerifyChain}>
        {buttonText}
      </Button>
      {account && chainId !== "0x5" ? (
        <Button className={styles.button} onClick={SwitchChain}>
          Switch to Goerli network
        </Button>
      ) : null}
    </>
  );
}

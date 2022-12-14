import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import useAppContext from "../../../context/Context";
import { useEffect } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import styles from "./PageLayout.module.css";
import { abi, contractAddress } from "../../../constants/index";
import { useRouter } from "next/router";

const { Header, Content, Footer } = Layout;

export default function PageLayout({ children, breadcrumbs }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();
  const { tokenAmount, setTokenAmount } = useAppContext();

  const {
    enableWeb3,
    deactivateWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    isWeb3EnableLoading,
    chainId,
  } = useMoralis();

  const { runContractFunction: balanceOf } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress.goerli,
    functionName: "balanceOf",
    params: {
      account: account,
    },
    account: account,
  });

  useEffect(() => {
    if (isWeb3Enabled) return;
    typeof window !== "undefined"
      ? window.localStorage.getItem("connected")
        ? enableWeb3()
        : null
      : null;
  }, [isWeb3Enabled]);

  useEffect(() => {
    const VerifyChain = async () => {
      chainId !== "0x5" ? router.push("/") : null;
    };
    VerifyChain();
  }, [chainId]);

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      account === null
        ? (window.localStorage.removeItem("connected"), deactivateWeb3())
        : isWeb3Enabled &&
          (async function newAmount() {
            const tokenAmountNew = await balanceOf();
            setTokenAmount(tokenAmount + parseInt(tokenAmountNew._hex));
          })();
    });
  }, []);

  return (
    <Layout className={styles.generalLayout}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          Rather Labs
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className={styles.userGuide}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {breadcrumbs.map((item, index) => {
              const key = index + 1;
              return (
                <Breadcrumb.Item href={item.path} key={key}>
                  {item.label}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
          <div className={styles.accountDetails}>
            {account ? (
              <p>
                <strong>Account number:</strong> {account}
              </p>
            ) : (
              <Button
                className={styles.button}
                disabled={isWeb3EnableLoading}
                onClick={async () => {
                  await enableWeb3();
                  typeof window !== "undefined"
                    ? window.localStorage.setItem("connected", "injected")
                    : null;
                }}
              >
                Connect Metamask
              </Button>
            )}
            {account ? (
              <p>
                <strong>$QUIZ Token amount:</strong> {tokenAmount}
              </p>
            ) : null}
          </div>
        </div>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Rather Labs Survey ©2022 Created by Fer Leiva
      </Footer>
    </Layout>
  );
}

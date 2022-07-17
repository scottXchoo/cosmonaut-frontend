import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import GreenID from "../../../../../../components/Contents/GreenID";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import { L3C1U2S3Code } from "./L3C1U2S3Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::BuyFreightToken { address, amount } => {
  execute::buy_freight_token(deps, info, address, amount)
}
\`\`\``;

function L3C1U2S3() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <GreenID>3</GreenID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>BuyFreightToken</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                <CodeBlock>BuyFreightToken</CodeBlock> receives and burns{" "}
                <CodeBlock>money</CodeBlock>, and mints{" "}
                <CodeBlock>freight</CodeBlock>
                tokens.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L3C1U2S3Code />
      </CodeEditor>
    </>
  );
}

export default L3C1U2S3;
import { Wrapper } from "./wrapper";
import { Toggle } from "./toggle";
import { Recommended } from "./recommended";
// import {getRecommended} from
import { getRecommended } from "@/lib/recommended-service";

export const Sidebar = async () => {
  const recommended = await getRecommended();
  return (
    <>
      <div className="text-white ">
        <Wrapper>
          <Toggle />
          <div className="space-y-4 pt-4 lg:pt-0">
            <Recommended data={recommended} />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

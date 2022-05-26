import { render } from "@testing-library/react";
import { Card } from "../Card";


describe('<Card> Test', () => {

    it('should match snapshot and have given classes', () => {


        //Card size auto
        const { container: containerAuto } = render(<Card size="auto" borderColor="" />);
        expect(containerAuto).toMatchSnapshot();
        expect(containerAuto.getElementsByClassName("size-auto").length).toBe(1);

        //Card size large
        const { container: containerLarge } = render(<Card size="large" borderColor="" />);
        expect(containerLarge).toMatchSnapshot();
        expect(containerLarge.getElementsByClassName("size-large").length).toBe(1);


        //Card size small
        const { container: containerMedium } = render(<Card size="medium" borderColor="" />);
        expect(containerMedium).toMatchSnapshot();
        expect(containerMedium.getElementsByClassName("size-medium").length).toBe(1);



        //Card size auto
        const { container: containerSmall } = render(<Card size="small" borderColor="" />);
        expect(containerSmall).toMatchSnapshot();
        expect(containerSmall.getElementsByClassName("size-small").length).toBe(1);

    })

})
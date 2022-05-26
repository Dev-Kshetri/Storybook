import { render } from "@testing-library/react";
import { IconButton } from "../IconButton";


describe('<IconButton> Test', () => {

    it('should match snapshot and have given classes', () => {

        //IconButton Default
        const { container: componentIconButton1, getByRole } = render(<IconButton
            icon={<span>🐒</span>}
            backgroundColor=""
            edgesColor=""
            variant="default"
        />);
        expect(componentIconButton1).toMatchSnapshot();
        expect(componentIconButton1.getElementsByClassName("default").length).toBe(1);
        expect("span").toBeInTheDocument();


        //IconButton Filled
        const { container: componentIconButton2 } = render(<IconButton
            icon={<span>🐒</span>}
            backgroundColor=""
            edgesColor=""
            variant="filled"
        />);
        expect(componentIconButton2).toMatchSnapshot();
        expect(componentIconButton2.getElementsByClassName("filled").length).toBe(1);

        //IconButton Outlined
        const { container: componentIconButton3 } = render(<IconButton
            icon={<span>🐒</span>}
            backgroundColor=""
            edgesColor=""
            variant="outlined"
        />);
        expect(componentIconButton3).toMatchSnapshot();
        expect(componentIconButton3.getElementsByClassName("outlined").length).toBe(1);

    })

})
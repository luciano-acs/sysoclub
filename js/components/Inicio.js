export const Inicio = () => {
    let section = document.createElement('section');
    section.setAttribute('class','presentacion');
    section.innerHTML = 
    `
            <div class="fotos">
                <div class="item item1"></div>
                <div class="item item2"></div>
                <div class="item item3"></div>
                <div class="item item4"></div>
            </div>
            <div class="editorial">
                <h1>SYSOCLUB</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates optio officiis velit nesciunt quis consequatur repellat possimus unde rerum, necessitatibus in ipsa repudiandae! Animi dignissimos iste magnam temporibus nihil vitae, amet, possimus ad molestias blanditiis neque laborum culpa debitis incidunt dolore aliquam similique in, explicabo et rerum odio quibusdam perferendis! Perspiciatis nisi maiores voluptatum asperiores ut libero veritatis, praesentium necessitatibus quod totam cumque ea quisquam adipisci exercitationem sit soluta eum unde consequatur at maxime. Eaque vitae ad ex excepturi temporibus.</p>
            </div>
    `;

    return section;
}
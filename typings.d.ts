type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Post extends Base {
    body: Block[];
    coverImage: Image;
    slug: Slug;
    title: string;
    description: string;
    publishedAt: string;
}

interface Description {
    _type: "description";
    current: string;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    current: string;
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface coverImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}
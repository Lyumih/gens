import { Layout, Typography } from "antd"

export const HeroPage = () => {
    return (
        <Layout>
            <Layout.Header><Typography.Text>Игра Gens</Typography.Text></Layout.Header>
            <Layout.Content>Content</Layout.Content>
            <Layout.Footer>Игра Gens</Layout.Footer>
        </Layout>
    )
}
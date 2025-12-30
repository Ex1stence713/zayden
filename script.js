window.addEventListener("DOMContentLoaded", async () => {
    document.querySelector(".card").classList.add("show")

    console.log("Downloading data...")
    const res = await fetch("https://loom.cat/api/v1/users/1087829498810073269")
    const data = await res.json()
    console.log("Downloaded data!")

    /*
        <div class="flex">
            <img class="user" src="https://cdn.discordapp.com/attachments/1392247942076960768/1455303243881123951/avatar.jpg?ex=69543c43&is=6952eac3&hm=0c7ef0a39913fa149aa6ae69a1562c88c61eb7ca81fbda19b8079a09d71462a5&" style="height: 72px">
            <div style="width: calc(100% - 82px);">
                <h1>! Zayden</h1>
                <div class="flex" style="justify-content: space-between;">
                    <div>._nighthunter_.</div>
                    <div>🅿️🕸️😊</div>
                </div>
                <div class="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime inventore facilis?</div>
            </div>
        </div>
    */

    //discord
    !function() {
        const core = document.createElement("div")
        core.className = "flex"
        
        const avatar = document.createElement("img")
        avatar.src = data.metadata.display_avatar_url
        avatar.className = "user"

        const text = document.createElement("div")
        text.style.width = "calc(100% - 82px)"

        const displayName = document.createElement("h1")
        displayName.innerText = data.metadata.global_name

        const nicknameAndTag = document.createElement("div")
        nicknameAndTag.className = "flex"
        nicknameAndTag.style.justifyContent = "space-between"
        nicknameAndTag.style.alignItems = "center"

        const nick = document.createElement("div")
        nick.innerText = data.metadata.username

        const tag = document.createElement("div")
        tag.className = "discord-tag flex"
        tag.style.alignItems = "center"

        const tagimg = document.createElement("img")
        tagimg.src = data.server_tag.icon_url
        
        tag.append(tagimg, data.server_tag.name)
        nicknameAndTag.append(nick, tag)
        text.append(displayName, nicknameAndTag)
        core.append(avatar, text)

        const status = data.activities?.find?.(x => x.type === 4)
        if (status?.text) {
            const quote = document.createElement("div")
            quote.className = "quote"
            quote.innerText = status.text
            text.append(quote)
        }

        const a = document.createElement("a")
        a.style.marginTop = "12px"
        a.classList = "button"
        a.href = `https://discord.com/users/${data.metadata.id}`
        a.innerText = "Zobacz mnie na Discordzie!"

        const m = document.querySelector(".parent > .d1")
        m.innerHTML = ""
        m.append(core, a)
    }()
})
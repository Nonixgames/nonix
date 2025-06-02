async function widget() {
    const widgetCall = await fetch(
        "https://discord.com/api/guilds/770767062415048736/widget.json",
    );
    const widget = await widgetCall.json();

    document.querySelector("#widget-name h2").innerText = widget["name"];

    let preview = '<a class="preview-title">Channels</a>';

    for (let channel of widget["channels"].sort(
        (a, b) => a.position - b.position,
    ))
        preview += `<div class="widget-channel"><a>${channel["name"]}</a></div>`;

    preview += '<br><a class="preview-title">Members</a>';

    for (let member of widget["members"].sort(
        (a, b) => a.joined_at - b.joined_at,
    ))
        preview += `<div class="widget-member"><div>a</div><img src="${member["avatar_url"]}"><div>a</div><a>${member["username"]}</a></div>`;

    document.querySelector("#widget-preview").innerHTML = preview;

    document.querySelector("#widget-invite").onclick = () =>
        (window.location.href = widget["instant_invite"]);
}

document.addEventListener("DOMContentLoaded", widget);

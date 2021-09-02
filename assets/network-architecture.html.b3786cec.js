import{o as e,c as a,a as r,F as o,d}from"./app.ea66aa66.js";const c={},t=d('<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p><code>OSI</code> 的七层协议体系结构的概念清楚，理论完善，但它既复杂又不实用，而 <code>TCP/IP</code> 体系结构已得到非常广泛的应用。</p><p><code>TCP/IP</code> 是一个四层的体系结构，不过实质上讲，<code>TCP/IP</code> 只有最上面的三层，因为最下面的网络接口层基本上和一般的通信链路在功能上没有多大差别，对于计算机网络来说，这一层没有什么特别新的具体的内容。</p><p>在学习计算机网络的原理时往往采取这种的办法，即综合 <code>OSI</code> 和 <code>TCP/IP</code> 的优点，采用一种只有五层协议的体系结构，这样既简洁又能将概念阐述清楚。</p>',4),p=d('<h2 id="五层协议" tabindex="-1"><a class="header-anchor" href="#五层协议" aria-hidden="true">#</a> 五层协议</h2><h3 id="_1-应用层-application-layer" tabindex="-1"><a class="header-anchor" href="#_1-应用层-application-layer" aria-hidden="true">#</a> 1. 应用层（application layer）</h3><p>应用层是体系结构中的最高层。应用层的任务是通过应用进程间的交互来完成特定网络应用。应用层协议定义的是应用进程间通信和交互的规则。</p><p>对于不同的网络应用需要有不同的应用层协议。例如：支持万维网应用的 HTTP 协议，支持电子邮件的 SMTP 协议，支持文件传送的 FTP 协议等。</p><p>我们将应用层交互的数据单元称为报文。</p><h3 id="_2-运输层-transport-layer" tabindex="-1"><a class="header-anchor" href="#_2-运输层-transport-layer" aria-hidden="true">#</a> 2. 运输层（transport layer）</h3><p>运输层的任务就是负责向两个主机中进程之间的通信提供通信的数据传输服务。应用进程利用该服务传送应用层报文。</p><p>由于一台主机可同时运行多个进程，因此运输层有复用和分用的功能。复用就是多个应用层进程可同时使用下面运输层的服务，分用与复用相反，是运输层把收到的信息分别交付上面应用层的相应进程。</p><p>运输层主要使用以下两种协议：</p><ul><li><p><strong>传输控制协议 TCP（Transmission Control Protocol）</strong></p><p>提供面向连接的、可靠的数据传输服务，其数据传输的单位是报文段（segment）。</p></li><li><p><strong>用户数据报协议 UDP（User Datagram Protocol）</strong></p><p>提供无连接的、尽最大努力的数据传输服务（不保证数据传输的可靠性），其数据传输的单位是用户数据报。</p></li></ul><h3 id="_3-网络层-network-layer" tabindex="-1"><a class="header-anchor" href="#_3-网络层-network-layer" aria-hidden="true">#</a> 3. 网络层（network layer）</h3><p>网络层负责为分组交换网上的不同主机提供通信服务。在发送数据时，网络层把运输层产生的报文段或用户数据封装成分组或包（packet）进行传送。在 <code>TCP/IP</code> 体系中，由于网络层使用 <code>IP</code> 协议，因此分组也叫做 <code>IP</code> 数据报，或简称为数据报。</p><p>网络层的另一个任务就是要选择合适的路由，使源主机运输层所传下来的分组能够通过网络中的路由器找到目标主机。</p><h3 id="_4-数据链路层-data-link-layer" tabindex="-1"><a class="header-anchor" href="#_4-数据链路层-data-link-layer" aria-hidden="true">#</a> 4. 数据链路层（data link layer）</h3><p>数据链路层常简称为链路层。两台主机之间的数据传输，总是在一段一段的链路上传送的，这就需要使用专门的链路层协议。在两个相邻结点之间传送数据时，数据链路层将网络层交下来的 <code>IP</code> 数据报组装成帧（framing）。在相邻的结点间的链路上传送帧（frame），每一帧包括数据和必要的控制信息（如同步信息、地址信息、差错控制等）。</p><p>在接收数据时，控制信息使接收端能够知道一个帧从哪个比特开始和到哪个比特结束。这样，数据链路层在收到一个帧后，就可以从中提取出数据部分，上交给网络层。</p><h3 id="_5-物理层-physical-layer" tabindex="-1"><a class="header-anchor" href="#_5-物理层-physical-layer" aria-hidden="true">#</a> 5. 物理层（physical layer）</h3><p>在物理层上所传数据的单位是比特。发送方发送 1（或 0）时，接受方应当收到对应的数据。因此物理层要考虑的是用多大的电压代表 1 或 0,以及接收方如何识别出发送方所发的比特。物理层还要确定连接电缆的插头应当有多少根引脚以及各个引脚应如何连接。</p><p>在因特网所使用的各种协议中，最重要和最著名的就是 <code>TCP</code> 和 <code>IP</code> 两个协议。在线经常提到的 <code>TCP/IP</code> 并不一定是单指 <code>TCP</code> 和 <code>IP</code> 这两个具体的协议，而往往是表示因特网所使用的整个 <code>TCP/IP</code> 协议族（protocol suite）。</p>',19);c.render=function(d,c){return e(),a(o,null,[t,r("img",{src:d.$withBase("/computer/network-architecture-1.jpeg"),alt:"network-architecture-1"},null,8,["src"]),p,r("img",{src:d.$withBase("/computer/network-architecture-2.jpeg"),alt:"数据在各层之间的传递过程"},null,8,["src"])],64)};export default c;

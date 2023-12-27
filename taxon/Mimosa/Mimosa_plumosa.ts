// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa plumosa
const Mimosa_plumosa = new Mimosa()
Mimosa_plumosa.specificEpithet = 'plumosa'

Mimosa_plumosa.stems = new Stems()

Mimosa_plumosa.stipule = new Stipule()
Mimosa_plumosa.stipule.margin = new MarginStipule()
Mimosa_plumosa.stipule.adaxial = new AdaxialStipule()
Mimosa_plumosa.stipule.abaxial = new AbaxialStipule()

Mimosa_plumosa.leaf = new Leaf()
Mimosa_plumosa.leaf.petiole = new Petiole()
Mimosa_plumosa.leaf.bipinnate = new Bipinnate()
Mimosa_plumosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_plumosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_plumosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_plumosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_plumosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_plumosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_plumosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 30)
Mimosa_plumosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(38)
Mimosa_plumosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_plumosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_plumosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_plumosa.inflorescence = new Inflorescence()
Mimosa_plumosa.inflorescence.peduncle = new Peduncle()
Mimosa_plumosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_plumosa.flower = new Flower()
Mimosa_plumosa.flower.bracteole = new Bracteole()
Mimosa_plumosa.flower.merism = '4-merous'
Mimosa_plumosa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_plumosa.flower.calyx = new Calyx()
Mimosa_plumosa.flower.calyx.shape = 'collar'
Mimosa_plumosa.flower.corolla = new Corolla()
Mimosa_plumosa.flower.corolla.shape = 'funnelform'

Mimosa_plumosa.androecium = new Androecium()
Mimosa_plumosa.androecium.filaments = new Filaments()
Mimosa_plumosa.androecium.filaments.colour = 'pinkish'

Mimosa_plumosa.ginoecium = new Ginoecium()
Mimosa_plumosa.ginoecium.ovary = new Ovary()

Mimosa_plumosa.fruit = new Fruit()
Mimosa_plumosa.fruit.stipe = new Stipe()
Mimosa_plumosa.fruit.replum = new Replum()
Mimosa_plumosa.fruit.epicarp = new Epicarp()

Mimosa_plumosa.seed = new Seed()


// Description authorship
Mimosa_plumosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_plumosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa plumosa
export { Mimosa_plumosa }
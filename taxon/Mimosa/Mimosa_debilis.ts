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


// Description of Mimosa debilis
const Mimosa_debilis = new Mimosa()
Mimosa_debilis.specificEpithet = 'debilis'

Mimosa_debilis.stems = new Stems()

Mimosa_debilis.stipule = new Stipule()
Mimosa_debilis.stipule.margin = new MarginStipule()
Mimosa_debilis.stipule.adaxial = new AdaxialStipule()
Mimosa_debilis.stipule.abaxial = new AbaxialStipule()

Mimosa_debilis.leaf = new Leaf()
Mimosa_debilis.leaf.petiole = new Petiole()
Mimosa_debilis.leaf.bipinnate = new Bipinnate()
Mimosa_debilis.leaf.bipinnate.rachis = new Rachis()
Mimosa_debilis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_debilis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_debilis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_debilis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_debilis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_debilis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_debilis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(22, 34)
Mimosa_debilis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_debilis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_debilis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_debilis.inflorescence = new Inflorescence()
Mimosa_debilis.inflorescence.peduncle = new Peduncle()
Mimosa_debilis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_debilis.flower = new Flower()
Mimosa_debilis.flower.bracteole = new Bracteole()
Mimosa_debilis.flower.merism = '4-merous'
Mimosa_debilis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_debilis.flower.calyx = new Calyx()
Mimosa_debilis.flower.corolla = new Corolla()
Mimosa_debilis.flower.corolla.shape = ['funnelform', 'subtubular']

Mimosa_debilis.androecium = new Androecium()
Mimosa_debilis.androecium.filaments = new Filaments()
Mimosa_debilis.androecium.filaments.colour = 'lilac'

Mimosa_debilis.ginoecium = new Ginoecium()
Mimosa_debilis.ginoecium.ovary = new Ovary()

Mimosa_debilis.fruit = new Fruit()
Mimosa_debilis.fruit.stipe = new Stipe()
Mimosa_debilis.fruit.replum = new Replum()
Mimosa_debilis.fruit.epicarp = new Epicarp()

Mimosa_debilis.seed = new Seed()


// Description authorship
Mimosa_debilis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_debilis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa debilis
export { Mimosa_debilis }
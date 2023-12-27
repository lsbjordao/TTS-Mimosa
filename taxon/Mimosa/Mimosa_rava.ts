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


// Description of Mimosa rava
const Mimosa_rava = new Mimosa()
Mimosa_rava.specificEpithet = 'rava'

Mimosa_rava.stems = new Stems()

Mimosa_rava.stipule = new Stipule()
Mimosa_rava.stipule.margin = new MarginStipule()
Mimosa_rava.stipule.adaxial = new AdaxialStipule()
Mimosa_rava.stipule.abaxial = new AbaxialStipule()

Mimosa_rava.leaf = new Leaf()
Mimosa_rava.leaf.petiole = new Petiole()
Mimosa_rava.leaf.bipinnate = new Bipinnate()
Mimosa_rava.leaf.bipinnate.rachis = new Rachis()
Mimosa_rava.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_rava.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_rava.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 7)
Mimosa_rava.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(8)
Mimosa_rava.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_rava.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_rava.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_rava.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 7)
Mimosa_rava.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_rava.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_rava.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_rava.inflorescence = new Inflorescence()
Mimosa_rava.inflorescence.peduncle = new Peduncle()
Mimosa_rava.inflorescence.capitate = new CapitateInflorescence()

Mimosa_rava.flower = new Flower()
Mimosa_rava.flower.bracteole = new Bracteole()
Mimosa_rava.flower.merism = ['4-merous', '5-merous']
Mimosa_rava.flower.calyx = new Calyx()
Mimosa_rava.flower.corolla = new Corolla()
Mimosa_rava.flower.corolla.shape = 'funnelform'

Mimosa_rava.androecium = new Androecium()
Mimosa_rava.androecium.filaments = new Filaments()
Mimosa_rava.androecium.filaments.colour = 'pinkish'

Mimosa_rava.ginoecium = new Ginoecium()
Mimosa_rava.ginoecium.ovary = new Ovary()

Mimosa_rava.fruit = new Fruit()
Mimosa_rava.fruit.stipe = new Stipe()
Mimosa_rava.fruit.replum = new Replum()
Mimosa_rava.fruit.epicarp = new Epicarp()

Mimosa_rava.seed = new Seed()


// Description authorship
Mimosa_rava.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_rava.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa rava
export { Mimosa_rava }